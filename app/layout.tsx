// import type { Metadata } from "next";

// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Performance Audit Blog",
//   description:
//     "Next.js image, font and script optimization audit",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">

//       <head>

//         <link
//           rel="preconnect"
//           href="https://fonts.googleapis.com"
//         />

//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />

//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />

//       </head>

//       <body>
//         {children}
//       </body>

//     </html>
//   );
// }

// --------------------------------  AFTER OPTIMIZATION -----------------

import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Performance Audit Blog",
  description:
    "Next.js image, font and script optimization audit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        {children}
      </body>

    </html>
  );
}