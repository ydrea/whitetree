import Image from "next/image";
import { useState } from "react";
import { API_URL } from "../utils/urls";
import styles from "../styles/Icons.module.css";

import Checkbox from "../components/Checkbox";
function icons() {
  const [vegetarian, vegetarianSet] = useState(false);
  const handleVegetarian = () => {
    vegetarianSet(!vegetarian);
  };
  const [image, setImage] = useState("/VT/vt-.svg");

  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }
  return (
    <div className={styles.contain}>
      <div className={styles.cnt}>
        <span className={styles.icons}>
          <Image
            src={"VG/vg.svg"}
            alt="vegan"
            width={58}
            height={58}
            data-tip="vegan"
          />
          <p className={styles.label}>vegan</p>
        </span>
      </div>

      <div className={styles.cnt}>
        <span className={styles.icons}>
          {" "}
          <Image
            src={image}
            alt="vegetarian"
            width={58}
            height={58}
            data-tip="vegetarian"
          />
          <p className={styles.label}>vegetarian</p>
          <div className={styles.hovericon}>
            <Image
              src="VT/vt.svg"
              alt="vegetarian"
              width={58}
              height={58}
              data-tip="vegetarian"
            />
          </div>
          <div className={styles.hide}>
            <Checkbox
              id="box"
              label="Vt"
              value={vegetarian}
              onChange={handleVegetarian}
            />
          </div>
        </span>
      </div>

      <div className={styles.cnt}>
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/kt_344405c4f5.svg"}
            alt="keto"
            width={58}
            height={58}
            data-tip="keto"
          />
          <p className={styles.label}>keto</p>
        </span>
      </div>

      <div className={styles.cnt}>
        paleo
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/pl_4c618c55f7.svg"}
            alt="paleo"
            width={58}
            height={58}
            data-tip="paleo"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        gluten-
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/gf_29fbacaf4a.svg"}
            alt="
            gluten-free"
            width={58}
            height={58}
            data-tip="gluten-free"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        organic
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/or_96ff90794e.svg"}
            alt="organic"
            width={58}
            height={58}
            data-tip="organic"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        affordable
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/af_595cf5b430.svg"}
            alt="affordable"
            width={58}
            height={58}
            data-tip="affordable"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        local
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/ls_265521672a.svg"}
            alt="local"
            width={58}
            height={58}
            data-tip="locally sourced"
          />
        </span>
      </div>
    </div>
  );
}

export default icons;
