import Link from "next/link";

export default function HomePage() {
  return (
    <main className="dashboard">
      <h1>Next.js Playground</h1>

      <Link href="/dashboard">
        Open Dashboard
      </Link>
    </main>
  );
}