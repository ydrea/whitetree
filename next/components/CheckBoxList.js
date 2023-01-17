import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
// import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleChecked, getEm } from "../redux/iconSlice";
//

function Boxlist() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.icon);
  //
  const handleFavCheck = (id, fav) => {
    console.log(id);
    dispatch(
      toggleChecked(
        { fav: !fav, id: id }
        // (fav = !fav)
      )
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
            onChange={() => handleFavCheck(i.id, i.fav)}
          />
        ))}
        {item.map((ii) => (
          <p key={ii.id}>{ii.fav.toString()}</p>
        ))}
      </div>{" "}
    </>
  );
}

export default Boxlist;
