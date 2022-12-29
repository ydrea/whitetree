import React, { useState } from "react";
import { useDispatch } from "react-redux";
//

const CheckBoxList = () => {
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
    <div>
      <label>
        <Checkbox icon={vt} id="Vt" value={checked} onChange={handleCheck} />
      </label>
      <p>Is it Vegan? {checked.toString()}</p>
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default CheckBoxList;
