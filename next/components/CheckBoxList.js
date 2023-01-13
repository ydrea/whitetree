import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";

//

function Boxlist() {
  const item = icons.icons;
  console.log(item);

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
