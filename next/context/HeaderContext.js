import { createContext, useState } from "react";
//import {createContext, useContextSelector} from 'use-context-selector'

export const HeaderContext = createContext(null);

export const HeaderContextWrapper = (props) => {
  const userCtx = {
    firstName: "Alo",
    lastName: "Medo",
  };
  const [jea, jeaSet] = useState(true);

  return (
    <HeaderContext.Provider value={{ userCtx, jea, jeaSet }}>
      {props.children}
    </HeaderContext.Provider>
  );
};
