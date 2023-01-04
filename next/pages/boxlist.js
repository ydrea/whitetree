import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
//

const boxlist = () => {
  const dispatch = useDispatch();
  console.log("boxlist", icons);

  const [checkedArray, checkedArraySet] = useState(
    new Array(icons.length).fill(false)
  );

  const options = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ];
  const handleCheck = () => {
    console.log("handle", checkedArray);
    checkedArraySet(!checkedArray);
  };
  const [vegetarian, vegetarianSet] = useState(false);
  const [vt, setVt] = useState(["VT/vt-.svg", "VT/vt.svg", "VT/vt+.svg"]);
  const handleVegetarian = () => {
    vegetarianSet(!vegetarian);
    console.log(vegetarian);
  };
  // //
  // useEffect(() => {
  //   const ico = icons.icons.map((ii) => {
  //     ii.icns;
  //   });
  // });
  // //
  return (
    <div>
      {icons.icons.map((i) => {
        console.log("MAP", i.icns, i.name);
        return (
          <label>
            <Checkbox
              key={i.id}
              icon={`${i.name}/${i.icns}`}
              id={i.id}
              name={i.name}
              value={checkedArray}
              onChange={handleCheck}
            />
          </label>
        );
      })}
      <label>
        <Checkbox
          icon={vt}
          id="ckb"
          name="Vt"
          value={vegetarian}
          onChange={handleVegetarian}
        />
      </label>
      <p>Is it on? {vegetarian.toString()}</p>
    </div>
  );
};

export default boxlist;
