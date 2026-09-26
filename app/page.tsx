import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      <h1>My SaaS Application</h1>

      <p>
        Welcome to our application.
      </p>

      <p>
        This is a public marketing page.
      </p>

      <div className="actions">
        <Link href="/login">
          Go to Login
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>
      </div>
    </main>
  );
}