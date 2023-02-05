import React from "react";

import { NavProvider } from "../context/navContext";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(props) {
  const { children } = props;
  return (
    <>
      {/* <NavProvider nav={nav}> */}
      <Header />
      {/* </NavProvider> */}
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
