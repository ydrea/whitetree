import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
//

const boxlist = () => {
  const dispatch = useDispatch();
  console.log(icons);

  const [checked, checkedSet] = useState(false);
  const handleCheck = () => {
    checkedSet(!checked);
  };
  const [vegetarian, vegetarianSet] = useState(true);
  const [vt, setVt] = useState(["VT/vt-.svg", "VT/vt.svg", "VT/vt+.svg"]);
  const handleVegetarian = () => {
    vegetarianSet(!vegetarian);
    console.log(vegetarian);
  };

  return (
    //prettier-ignore
    <div>
      {icons.icons.map((i)=>{
        console.log(i.icns)
       return <p key={i.id}>{i.icns}</p>}
      )}
      <label>
        <Checkbox icon={vt} id="ckb" name="Vt" value={checked} onChange={handleCheck} />
      </label>
      <p>Is it on? {checked.toString()}</p>
    </div>
  );
};

export default boxlist;
