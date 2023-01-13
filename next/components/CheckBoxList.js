import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import { toggleFav } from "../redux/iconSlice";
import styles from "../styles/Ico.module.css";

//

function Boxlist() {
  const item = icons.icons;
  console.log(item);
  const dispatch = useDispatch();

  const handleFavCheck = () => {
    dispatch(
      toggleFav({
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
            value={i.fav}
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
