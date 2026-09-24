export const dynamic = "force-static";

export default function SSGPage() {
  const timestamp = new Date().toISOString();

  return (
    <div className="container">
      <h2>Static Site Generation (SSG)</h2>

      <div className="card">
        <p>
          <strong>Server timestamp:</strong>
        </p>

        <p className="timestamp">
          {timestamp}
        </p>

        <p>
          This page is statically generated at build
          time.
        </p>

        <p>
          Refreshing the page will show the same
          timestamp.
        </p>
      </div>
    </div>
  );
}