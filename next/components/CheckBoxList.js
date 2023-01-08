import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
import styles from "../styles/Ico.module.css";
//

function Boxlist() {
  const item = icons.icons;
  console.log(item);
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
    <>
      <div className={styles.gridc}>
        {item.map((i) => (
          <Checkbox
            short={i.shortname}
            id={`ckb${i.id}`}
            key={i.id}
            name={i.name}
            icon={i.icns}
            value={checkArray.checktions.includes(i)}
            onChange={() => handleCheckboxCheck(i)}
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
