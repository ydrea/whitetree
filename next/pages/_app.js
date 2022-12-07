import { Router } from "next/router";
import { parseCookies } from "nookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";

function reDirect(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

function MyApp({ Component, pageProps, ctx }) {
  //
  const jwt = parseCookies(ctx).jwt;
  console.log(jwt);
  //
  return (
    <AuthProvider>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </AuthProvider>
  );
}

export default MyApp;
