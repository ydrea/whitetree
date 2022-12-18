import { parseCookies } from "nookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { HeaderContextWrapper } from "../context/HeaderContext";

//

function MyApp({ Component, pageProps }) {
  //
  console.log("PageProps", pageProps);

  return (
    // <NavProvider navigation={navigation}>
    <>
      <HeaderContextWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HeaderContextWrapper>
    </>
    // </NavProvider>
  );
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;

  // const userId = parseCookies{ctx}.userId;
  // const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  // const navigation = await res.json();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (ctx.pathname === "/icons") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
  };
};

export default MyApp;
