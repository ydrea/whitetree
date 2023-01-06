import React, { useState } from "react";

import styles from "../styles/Ico.module.css";
import { useDispatch } from "react-redux";
import Vt from "./ico/Vt";
import Vg from "./ico/Vg";
//

const CheckBoxList = () => {
  // const dispatch = useDispatch();
  const [vt, setVt] = useState(["VT/vt-.svg", "VT/vt.svg", "VT/vt+.svg"]);
  const [vegetarian, vegetarianSet] = useState(true);

  const [vg, setVg] = useState(["VG/vg-.svg", "VG/vg.svg", "VG/vg+.svg"]);
  const [vegan, veganSet] = useState(true);

  return (
    <div className={styles.box}>
      <div className={styles.boxicon}>
        <label>
          <Vt
            icon={vt}
            id="Vt"
            name="VT"
            value={vegetarian}
            onChange={() => vegetarianSet(!vegetarian)}
          />
        </label>
        <p>Is it ? {vegetarian.toString()}</p>
      </div>

      <div className={styles.boxicon}>
        <label>
          <Vg
            icon={vg}
            id="Vg"
            name="VG"
            value={vegan}
            onChange={() => veganSet(!vegan)}
          />
        </label>
        <p>Is it ? {vegan.toString()}</p>
      </div>
    </div>
  );
};

export default CheckBoxList;
