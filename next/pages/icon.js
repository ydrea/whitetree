import Boxlist from "../components/CheckBoxList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";
import { increment, decrement } from "../redux/counterSlice";
import { getEm } from "../redux/iconSlice";

export default function icon() {
  const stejt = useSelector((state) => state);
  const counter = useSelector((state) => state.counter.count);
  const ikone = useSelector((state) => state.icon);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  //

  return (
    <>
      <button onClick={() => dispatch(increment())}>:: + ::</button>
      {counter}
      <button onClick={() => dispatch(decrement())}>:: - ::</button>
      {counter}
      <p>{JSON.stringify(stejt)}</p>
      <p>{JSON.stringify(user)}</p>
      <Boxlist />
      <hr />
    </>
  );
}
