import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
//

function checkboxlist() {
  const item = icons.icons;
  console.log(item);

  const [checkArray, checkArraySet] = useState({ checktions: [] });
  const handleCheckbox = () => {
    checkArraySet(!checkArray);
  };
  const handleCheckboxCheck = (key) => {
    let sel = checkArray.checktions;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    checkArraySet({ checktions: sel });
    console.log(checkArray);
  };

  return (
    <div>
      {item.map((i) => (
        <Checkbox
          id="ckb"
          key={i.id}
          name={i.name}
          icon={i.icns}
          value={checkArray.checktions.includes(i)}
          onChange={() => handleCheckboxCheck(i)}
        />
      ))}
      <p>{checkArray.checktions.toString()}</p>
    </div>
  );
}

export default checkboxlist;
