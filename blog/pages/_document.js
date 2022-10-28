import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className="bg-gradient-to-r
      from-yellow-300
      via-green-300
      to-blue-300"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}