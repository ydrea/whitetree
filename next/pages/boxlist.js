import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
//

const boxlist = () => {
  const dispatch = useDispatch();
  const items = icons.icons;
  // console.log("boxlist", icons);

  const [checkedArray, checkedArraySet] = useState(
    new Array(items.length).fill(false)
  );

  const handleCheck = (i) => {
    console.log("handle", checkedArray);
    checkedArraySet(!checkedArray[i]);
  };

  return (
    <div>
      {items.map((i) => {
        console.log("MAP", i.icns, i.name);
        return (
          <label>
            <Checkbox
              key={i.id}
              icon={i.icns}
              id={`ckb${i.id}`}
              name={i.name}
              value={checkedArray}
              onChange={handleCheck}
            />
            <p>Is it on? {checkedArray.toString()}</p>
          </label>
        );
      })}
    </div>
  );
};

export default boxlist;
