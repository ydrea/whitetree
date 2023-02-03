import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
