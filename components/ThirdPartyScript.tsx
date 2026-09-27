// export default function ThirdPartyScript() {
//   return (
//     <script
//       dangerouslySetInnerHTML={{
//         __html: `
//           console.log("Third-party analytics loaded");

//           const start = performance.now();

//           while (performance.now() - start < 200) {
//             // Simulate expensive third-party JavaScript
//           }
//         `,
//       }}
//     />
//   );
// }

// -------------------------  AFTER Optimization --------------------

"use client";

import Script from "next/script";

export default function ThirdPartyScript() {
  return (
    <Script
      id="training-analytics"
      strategy="afterInteractive"
    >
      {`
        console.log("Third-party analytics loaded");

        const start = performance.now();

        while (performance.now() - start < 200) {
          // Simulate expensive third-party JavaScript
        }
      `}
    </Script>
  );
}