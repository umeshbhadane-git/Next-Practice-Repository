import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <h2>Rendering Strategies Playground</h2>

      <p>
        This project demonstrates four different
        rendering strategies in Next.js.
      </p>

      <div className="grid">
        <Link href="/ssg" className="card link-card">
          <h3>SSG</h3>
          <p>Static generation at build time.</p>
        </Link>

        <Link href="/ssr" className="card link-card">
          <h3>SSR</h3>
          <p>Dynamic rendering for every request.</p>
        </Link>

        <Link href="/isr" className="card link-card">
          <h3>ISR</h3>
          <p>Revalidation every 30 seconds.</p>
        </Link>

        <Link href="/csr" className="card link-card">
          <h3>CSR</h3>
          <p>Data fetching in the browser.</p>
        </Link>
      </div>
    </div>
  );
}