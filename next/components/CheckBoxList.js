import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";
import { useSelector, useDispatch } from "react-redux";

import { toggleChecked, getEm } from "../redux/iconSlice";
//

function Boxlist() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.icon);
  const fav = useSelector((state) => state.icon.fav);

  const handleFavCheck = (id) => {
    dispatch(
      toggleChecked({
        fav: !fav,
        id: id,
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
            value={i.fav}
            onChange={() => handleFavCheck(i.id)}
          />
        ))}
        {item.map((ii) => (
          <p>{ii.fav.toString()}</p>
        ))}
      </div>{" "}
    </>
  );
}

export default Boxlist;
