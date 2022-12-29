import Image from "next/image";
import { useState } from "react";
import { API_URL } from "../utils/urls";
import styles from "../styles/Ico.module.css";

function ico() {
  return (
    //prettier-ignore
    <div  className={styles.container}>
      <input className={styles.ckb} type="checkbox" name="af" id="ckb"/>
      <label htmlFor="ckb">
        <img src="AF/af-.svg" height={88} width={88} className={styles.init}/>
        <img src="AF/af.svg" height={88} width={88} className={styles.hover} />
        <Image src="AF/af+.svg" height={88} width={88} className={styles.done} />
       <span className={styles.lab}>: affordable :</span>
      </label>
    </div>
  );
}

export default ico;
