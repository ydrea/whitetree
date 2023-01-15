import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";
import { useSelector, useDispatch } from "react-redux";

import { toggleChecked, getEm } from "../redux/iconSlice";
//

function Boxlist() {
  // useEffect(() => {
  //   const item = getEm();
  //   console.log(item);
  // });
  const item = icons.icons;
  const dispatch = useDispatch();

  const { id, fav } = useSelector((state) => state.icon);

  const handleFavCheck = () => {
    console.log(id, fav);
    dispatch(
      toggleChecked({
        id: id,
        fav: !fav,
      })
    );
  };
  return (
    <>
      <div className={styles.gridFilter}>
        {item.map((i) => (
          <Checkbox
            className={styles.gridItem}
            short={i.shortname}
            id={`ckb${i.id}`}
            key={i.id}
            name={i.name}
            icon={i.icns}
            checked={i.fav}
            onChange={() => handleFavCheck()}
          />
        ))}
        {/* {checkArray.checktions.map((ii) => (
          <div>{ii.shortname}</div>
        ))} */}
      </div>{" "}
    </>
  );
}

export default Boxlist;
