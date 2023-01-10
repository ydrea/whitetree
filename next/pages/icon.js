import CheckBoxList from "../components/CheckBoxList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";

export default function icon() {
  const icon = useSelector((state) => state.icon);

  return (
    <>
      {" "}
      <p className={styles.moni}>{JSON.stringify(icon[0])}</p>
      <CheckBoxList />
      <hr />
    </>
  );
}
