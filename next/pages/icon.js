import Image from "next/image";
import { useState } from "react";
// import { API_URL } from "../utils/urls";
import styles from "../styles/Icons.module.css";

const icon = ({ checked, onChange }) => {
  const [vegetarian, vegetarianSet] = useState(true);
  const [vt, setVt] = useState([
    "VT/vt-.svg",
    "VT/vt.svg",
    "VT/vt+.svg",
    "VT/vtD.svg",
  ]);
  const handleVegetarian = () => {
    vegetarianSet(!vegetarian);
    console.log(vegetarian);
  };

  return (
    <div id="ckb">
      <span className={styles.icons}>
        {" "}
        <Image src={vt[0]} alt="vegetarian" width={48} height={48} />
        <div className={styles.hovericon}>
          <Image src={vt[1]} alt="vegetarian" width={48} height={48} />
        </div>{" "}
        <div className={styles.clickicon}>
          <Image src={vt[2]} alt="vegetarian" width={48} height={48} />
        </div>
        <div className={styles.doneicon}>
          <Image src={vt[3]} alt="vegetarian" width={48} height={48} />
        </div>
        <div>
          <input
            className={styles.iconcheckbox}
            type="checkbox"
            checked={!vegetarian}
            id={`box`}
            label="Vt"
            onChange={handleVegetarian}
          />
        </div>
      </span>
    </div>
  );
};

export default icon;
