"use client";
import "./globals.css";
import Header from "./Header";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <Header />
          {children}
          {/* <Footer /> */}
        </SessionProvider>
      </body>
    </html>
  );
}
