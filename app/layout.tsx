import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>My Blog</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p>© 2026 My Blog</p>
        </footer>
      </body>
    </html>
  );
}