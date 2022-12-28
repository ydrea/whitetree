import Image from "next/image";
import { useState } from "react";
import { API_URL } from "../utils/urls";
import styles from "../styles/Ico.module.css";

function ico() {
  return (
    //prettier-ignore
    <div id="ckb" className={styles.container}>
      <input className={styles.ckb} type="checkbox" name="vt" />
      <label htmlFor="bu">
        <Image src="VT/vt-.svg" height={88} width={88} className={styles.init}/>
        <Image src="VT/vt.svg" height={88} width={88} className={styles.hover} />
        <Image src="VT/vt+.svg" height={88} width={88} className={styles.active} />
        <Image src="VT/vtD.svg" height={88} width={88} className={styles.done} />
        VEGE
      </label>
    </div>
  );
}

export default ico;
