import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
//

const boxlist = () => {
  const [checked, checkedSet] = useState(false);

  const handleCheck = () => {
    checkedSet(!checked);
  };

  const dispatch = useDispatch();

  const [vegetarian, vegetarianSet] = useState(true);
  const [vt, setVt] = useState(["VT/vt-.svg", "VT/vt.svg", "VT/vt+.svg"]);

  const handleVegetarian = () => {
    vegetarianSet(!vegetarian);
    console.log(vegetarian);
  };

  return (
    //prettier-ignore
    <div>
      <label>
        <Checkbox icon={vt} id="ckb" name="Vt" value={checked} onChange={handleCheck} />
      </label>
      <p>Is it on? {checked.toString()}</p>
    </div>
  );
};

export default boxlist;
