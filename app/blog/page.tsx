import BlogCard from "@/components/BlogCard";
import ThirdPartyScript from "@/components/ThirdPartyScript";

import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <>
      <ThirdPartyScript />

      <main className="container">

        <section className="hero">

          <p className="eyebrow">
            PERFORMANCE AUDIT
          </p>

          <h1>
            Next.js Performance Optimization
          </h1>

          <p className="hero-description">
            This page demonstrates image, font and
            script optimization in Next.js.
          </p>

        </section>

        <section className="info">

          <h2>
            Blog Performance Audit
          </h2>

          <p>
            This application will be measured twice:
            first before optimization and then after
            applying Next.js performance features.
          </p>

        </section>

        <section className="blog-grid">

          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}

        </section>

      </main>
    </>
  );
}