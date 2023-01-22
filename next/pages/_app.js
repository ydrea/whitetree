import { parseCookies } from "nookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Router from "next/router";
import { Provider } from "react-redux";
//
import { store } from "../redux/store";
//

function MyApp({ Component, pageProps }) {
  //
  console.log("PageProps", pageProps);

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
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
