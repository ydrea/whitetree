import React, { createContext, useContext, useRef, useState } from "react";
import Header from "../components/Header";

const NavContext = createContext(null);

const useNav = () => {
  return useContext(NavContext);
};

export function NavProvider({ children, nav }) {
  const [menuItems] = useRef(nav);

  return (
    <NavContext.Provider value={{ menuItems }}>
      <Header />
    </NavContext.Provider>
  );
}
