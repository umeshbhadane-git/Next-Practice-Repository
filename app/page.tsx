import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">

      <p className="eyebrow">
        NEXT.JS TRAINING
      </p>

      <h1>
        Performance Audit
      </h1>

      <p className="hero-description">
        Image, font and script optimization
        demonstration.
      </p>

      <Link href="/blog">
        Open Blog →
      </Link>

    </main>
  );
}