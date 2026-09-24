import posts from "@/data/posts.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | My Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container">
      <Link href="/blog">← Back to Blog</Link>

      <h2>{post.title}</h2>

      <p className="description">
        {post.description}
      </p>

      <div className="content">
        <p>{post.content}</p>
      </div>
    </article>
  );
}