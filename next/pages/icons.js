import Image from "next/image";

import styles from "../styles/Icons.module.css";

function icons() {
  // function MouseOver(event) {
  //   event.target.style.background = "red";
  // }
  // function MouseOut(event) {
  //   event.target.style.background = "";
  // }
  return (
    <div>
      <div>
        vegan
        <span className={styles.icons}>
          <Image
            src="/VG/vg.svg"
            alt="vegan"
            width={58}
            height={58}
            data-tip="vegan"
          />
        </span>
      </div>

      <div>
        vegetarian
        <span className={styles.icons}>
          <Image
            src="/VT/vt.svg"
            alt="vegetarian"
            width={58}
            height={58}
            data-tip="vegetarian"
          />
        </span>
      </div>

      <div>
        keto
        <span className={styles.icons}>
          <Image
            src="/KT/kt.svg"
            alt="keto"
            width={58}
            height={58}
            data-tip="keto"
          />
        </span>
      </div>

      <div>
        paleo
        <span className={styles.icons}>
          <Image
            src="/PL/pl.svg"
            alt="paleo"
            width={58}
            height={58}
            data-tip="paleo"
          />
        </span>
      </div>

      <div>
        gluten-free
        <span className={styles.icons}>
          <Image
            src="/GF/gf.svg"
            alt="
            gluten-free"
            width={58}
            height={58}
            data-tip="
            gluten-free"
          />
        </span>
      </div>

      <div>
        organic
        <span className={styles.icons}>
          <Image
            src="/OR/or.svg"
            alt="organic"
            width={58}
            height={58}
            data-tip="organic"
          />
        </span>
      </div>

      <div>
        affordable
        <span className={styles.icons}>
          <Image
            src="/AF/af.svg"
            alt="affordable"
            width={58}
            height={58}
            data-tip="affordable"
          />
        </span>
      </div>

      <div>
        locally sourced
        <span className={styles.icons}>
          <Image
            src="/LS/ls.svg"
            alt="locally sourced"
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
