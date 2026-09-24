import Link from "next/link";
import posts from "@/data/posts.json";

export default function BlogPage() {
  return (
    <div className="container">
      <h2>Blog Posts</h2>

      <div className="posts">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <h3>{post.title}</h3>

            <p>{post.description}</p>

            <Link href={`/blog/${post.slug}`}>
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}