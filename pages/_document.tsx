import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism@2.1.13/dist/css/dracula-prism.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        <link rel="shortcut icon" href="#" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
