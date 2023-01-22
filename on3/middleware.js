// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("tokenRole: ", req.nextauth.token.role.name);

    // if (
    //   req.nextUrl.pathname.startsWith("/account") &&
    //   req.nextauth.token?.role !== "acc"
    // )
    //   return NextResponse.rewrite(
    //     new URL("/auth/login?message=You Are Not Authorized!", req.url)
    //   );
    if (
      req.nextUrl.pathname.startsWith("/user/") &&
      req.nextauth.token?.role.name !== "Authenticated"
    )
      return NextResponse.rewrite(
        new URL("/auth/local?message=You Are Not Authorized!", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/user/:path*"],
};
