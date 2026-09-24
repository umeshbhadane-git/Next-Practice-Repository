import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Providers from "@/components/Providers";


export const metadata: Metadata = {
  title: "Rendering Strategies Playground",
  description: "Learn SSG, SSR, ISR and CSR with Next.js",
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
          <h1>Rendering Playground</h1>

          <nav>
            <Link href="/ssg">SSG</Link>
            <Link href="/ssr">SSR</Link>
            <Link href="/isr">ISR</Link>
            <Link href="/csr">CSR</Link>
          </nav>
        </header>

        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}