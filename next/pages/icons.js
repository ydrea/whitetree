import Image from "next/image";
import { useState } from "react";
import { API_URL } from "../utils/urls";
import styles from "../styles/Icons.module.css";
// import Checkbox from "../components/Checkbox";
import { useDispatch } from "react-redux";

function icons() {
  const dispatch = useDispatch();

  const [vegetarian, vegetarianSet] = useState(true);
  const [vt, setVt] = useState([
    "VT/vt-.svg",
    "VT/vt.svg",
    "VT/vt+.svg",
    "VT/vt++.svg",
  ]);
  const handleVegetarian = () => {
    vegetarianSet(!vegetarian);
    console.log(vegetarian);
  };

  return (
    <div className={styles.contain}>
      <div className={styles.cnt}>
        <span className={styles.icons}>
          {" "}
          <Image
            src={vt[0]}
            alt="vegetarian"
            width={48}
            height={48}
            data-tip="vegetarian"
          />
          <p className={styles.label}>vegetarian</p>
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
      <div className={styles.cnt}>
        <span className={styles.icons}>
          <Image
            src={"VG/vg.svg"}
            alt="vegan"
            width={98}
            height={98}
            data-tip="vegan"
          />
          <p className={styles.label}>vegan</p>
        </span>
      </div>
      <div className={styles.cnt}>
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/kt_344405c4f5.svg"}
            alt="keto"
            width={98}
            height={98}
            data-tip="keto"
          />
          <p className={styles.label}>keto</p>
        </span>
      </div>

      <div className={styles.cnt}>
        <span className={styles.icons}>
          <Image
            src={API_URL + "/uploads/pl_4c618c55f7.svg"}
            alt="paleo"
            width={98}
            height={98}
            data-tip="paleo"
          />
          <p className={styles.label}>paleo</p>
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
