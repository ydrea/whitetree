// import ReactDOM from "react-dom";

import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { useAuth } from "../context/authContext";

export function Mod({ children, open, closeMe }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div
      className="fixed w-screen h-screen top-0 left-0 flex flex-col overflow-x-hidden overflow-y-auto 
    
     bg-white bg-opacity-25 "
    >
      <div className="flex items-center justify-between border-b border-solid border-olive-900"></div>
      Modal
      <button onClick={closeMe}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>,
    document.getElementById("portal")
  );
}

export default function Modal(props) {
  const { closeMe, open } = props;
  // const [_document, set_document] = useState(null);
  const { logout } = useAuth();

  // useEffect(() => {
  //   set_document(document);
  // }, []);

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="fixed inset-0 bg-white text-slate-900 text-lg sm:text-xl flex flex-col">
      <div className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h1 className="font-extrabold text-2xl sm:text-5xl select-none">
          MENU
        </h1>
        <i
          onClick={() => closeMe()}
          className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer"
        ></i>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h2
          onClick={() => {
            logout();
            closeMe();
          }}
          className="select-none duration-300 hover:pl-2 cursor-pointer"
        >
          Logout
        </h2>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
