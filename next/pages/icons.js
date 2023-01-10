import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";
//

function checkboxlist() {
  const item = icons.icons;
  const dispatch = useDispatch();
  const icon = useSelector((state) => state.icon);

  const [checkArray, checkArraySet] = useState({ checktions: [] });

  const handleCheckboxCheck = (key) => {
    let sel = checkArray.checktions;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    checkArraySet({ checktions: sel });
    console.log(checkArray.checktions);
  };

  return (
    <div className={styles.gridFilter}>
      {item.map((i) => (
        <Checkbox
          className={styles.gridicon}
          id={`ckb${i.id}`}
          key={i.id}
          name={i.name}
          icon={i.icns}
          value={checkArray.checktions.includes(i)}
          onChange={() => handleCheckboxCheck(i)}
        />
      ))}
      <span className={styles.gridicon}>
        {checkArray.checktions.map((ii) => ii.name)}
      </span>

      <p>{JSON.stringify(icon[0])}</p>
    </div>
  );
}

export default checkboxlist;
