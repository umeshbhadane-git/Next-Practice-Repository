export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const response = await fetch(
    "http://localhost:3000/api/time",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return (
    <div className="container">
      <h2>Server-Side Rendering (SSR)</h2>

      <div className="card">
        <p>
          <strong>Server timestamp:</strong>
        </p>

        <p className="timestamp">
          {data.timestamp}
        </p>

        <p>
          This page is rendered on the server for every
          request.
        </p>

        <p>
          Refreshing the page should produce a new
          timestamp.
        </p>
      </div>
    </div>
  );
}