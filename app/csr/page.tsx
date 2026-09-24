"use client";

import { useQuery } from "@tanstack/react-query";

type TimeResponse = {
  timestamp: string;
};

async function fetchTime(): Promise<TimeResponse> {
  const response = await fetch("/api/time");

  if (!response.ok) {
    throw new Error("Failed to fetch time");
  }

  return response.json();
}

export default function CSRPage() {
  const { data, isLoading, error } =
    useQuery({
      queryKey: ["server-time"],
      queryFn: fetchTime,
    });

  if (isLoading) {
    return (
      <div className="container">
        <h2>Client-Side Rendering (CSR)</h2>
        <p>Loading server timestamp...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h2>Client-Side Rendering (CSR)</h2>
        <p>Something went wrong.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Client-Side Rendering (CSR)</h2>

      <div className="card">
        <p>
          <strong>Server timestamp:</strong>
        </p>

        <p className="timestamp">
          {data?.timestamp}
        </p>

        <p>
          This data was fetched in the browser using
          TanStack Query.
        </p>

        <p>
          The initial page is rendered on the client,
          and the timestamp is fetched after JavaScript
          runs.
        </p>
      </div>
    </div>
  );
}