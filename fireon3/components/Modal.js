// import ReactDOM from "react-dom";

import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { useAuth } from "../context/authContext";

export function Mod({ open, closeMe }) {
  const { logout } = useAuth();

  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm">
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col border-solid border-olive">
          Modal
          <button onClick={closeMe}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            onClick={() => {
              logout();
              closeMe();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
