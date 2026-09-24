"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container">
      <h2>Something went wrong!</h2>

      <p>
        We could not load the blog.
      </p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}