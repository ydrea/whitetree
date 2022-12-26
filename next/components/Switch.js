import React, { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import Checkbox from "react-toggle";
//
const DARK_CLASS = "dark";
//
export const DarkToggle = () => {
  //
  const [isChecked, setIsChecked] = useState();
  //
  return (
    <div className="toggle-container">
      <checkbox
        className="react-switch-checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
        id={`react-switch-new`}
      />

      <label
        style={{ background: isChecked && "#ff8700" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <p> switch to {isChecked ? "light" : "dark"} mode</p>
    </div>
  );
};
