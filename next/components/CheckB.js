import React, { useState } from "react";

const CheckBox = () => {
  const [checked, checkedSet] = useState(false);

  const handleCheck = () => {
    checkedSet(!checked);
  };

  return (
    <div>
      <label>
        <Checkbox label="Vegan" value={checked} onChange={handleCheck} />
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

export default CheckBox;
