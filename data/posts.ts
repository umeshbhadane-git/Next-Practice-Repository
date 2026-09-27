export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
};

export const posts: BlogPost[] = [
  {
    slug: "nextjs-performance",
    title: "Next.js Performance Optimization",
    description:
      "Learn how to improve the performance of Next.js applications.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    imageAlt: "Developer writing code on a laptop",
    date: "September 20, 2026",
  },

  {
    slug: "react-server-components",
    title: "React Server Components",
    description:
      "Understand how React Server Components work in Next.js.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    imageAlt: "React programming",
    date: "September 18, 2026",
  },

  {
    slug: "javascript",
    title: "Modern JavaScript",
    description:
      "Explore important modern JavaScript features.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    imageAlt: "JavaScript code",
    date: "September 15, 2026",
  },

  {
    slug: "web-development",
    title: "Modern Web Development",
    description:
      "Learn the fundamentals of modern web development.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    imageAlt: "Web development workspace",
    date: "September 12, 2026",
  },

  {
    slug: "frontend",
    title: "Frontend Development",
    description:
      "Learn the important concepts behind frontend development.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    imageAlt: "Laptop showing code",
    date: "September 10, 2026",
  },

  {
    slug: "coding",
    title: "Learning to Code",
    description:
      "A beginner-friendly guide to becoming a better developer.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    imageAlt: "Programming code",
    date: "September 8, 2026",
  },
];