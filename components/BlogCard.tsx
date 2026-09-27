// import type { BlogPost } from "@/data/posts";

// type BlogCardProps = {
//   post: BlogPost;
// };

// export default function BlogCard({
//   post,
// }: BlogCardProps) {
//   return (
//     <article className="blog-card">

//       <img
//         src={post.image}
//         alt={post.imageAlt}
//         width={600}
//         height={338}
//         className="blog-image"
//       />

//       <div className="blog-content">

//         <p className="date">
//           {post.date}
//         </p>

//         <h2>{post.title}</h2>

//         <p>{post.description}</p>

//         <a href={`/blog/${post.slug}`}>
//           Read article →
//         </a>

//       </div>

//     </article>
//   );
// }

// -------------------  AFTER Optimization ------------------------------------

import Image from "next/image";

import type { BlogPost } from "@/data/posts";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({
  post,
}: BlogCardProps) {
  return (
    <article className="blog-card">

      <Image
        src={post.image}
        alt={post.imageAlt}
        width={600}
        height={338}
        sizes="(max-width: 800px) 100vw, 50vw"
        className="blog-image"
      />

      <div className="blog-content">

        <p className="date">
          {post.date}
        </p>

        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <a href={`/blog/${post.slug}`}>
          Read article →
        </a>

      </div>

    </article>
  );
}