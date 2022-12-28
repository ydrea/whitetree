import Image from "next/image";
import { useState } from "react";
import { API_URL } from "../utils/urls";
import styles from "../styles/Ico.module.css";

function ico() {
  return (
    //prettier-ignore
    <div  className={styles.container}>
      <input className={styles.ckb} type="checkbox" name="vt" id="ckb"/>
      <label htmlFor="ckb">
        <img src="VT/vt-.svg" height={88} width={88} className={styles.init}/>
        <img src="VT/vt.svg" height={88} width={88} className={styles.hover} />
        <Image src="VT/vtD.svg" height={88} width={88} className={styles.done} />
       <span className={styles.lab}>: VEGE :</span>
      </label>
    </div>
  );
}

export default ico;
