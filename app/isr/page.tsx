export const revalidate = 30;

export default function ISRPage() {
  const timestamp = new Date().toISOString();

  return (
    <div className="container">
      <h2>Incremental Static Regeneration (ISR)</h2>

      <div className="card">
        <p>
          <strong>Server timestamp:</strong>
        </p>

        <p className="timestamp">
          {timestamp}
        </p>

        <p>
          This page is regenerated at most every
          30 seconds.
        </p>

        <p>
          Refreshing immediately may show the same
          timestamp. After the revalidation period,
          a new version can be generated.
        </p>
      </div>
    </div>
  );
}