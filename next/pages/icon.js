import Boxlist from "../components/CheckBoxList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import { selectIcon } from "../redux/iconSlice";

export default function icon() {
  const stejt = useSelector((state) => state);
  const counter = useSelector((state) => state.counter.count);
  const icon = useSelector(selectIcon);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //
  const ikone = icon.map((i) => (
    <div key={i.id}>
      <p>{i.longname}</p>
    </div>
  ));

  return (
    <>
      <Boxlist />
      <hr />
      {ikone}
      <p>{JSON.stringify(icon)}</p>
      <button onClick={() => dispatch(increment())}>:: + ::</button>
      {counter}
      <button onClick={() => dispatch(decrement())}>:: - ::</button>
      {counter}
      <p>{JSON.stringify(user)}</p>
    </>
  );
}
