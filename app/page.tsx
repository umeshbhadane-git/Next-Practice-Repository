import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h2>Welcome to My Blog</h2>

      <p>
        This is a blog built using Next.js App Router.
      </p>

      <Link href="/blog" className="button">
        Read Blog
      </Link>
    </div>
  );
}
