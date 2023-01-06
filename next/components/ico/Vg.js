import styles from "../../styles/Ico.module.css";

export default function Vg() {
  return (
    //prettier-ignore
    <div  className={styles.container}>
      <input className={styles.ckb} type="checkbox" name="vg" id="ckb"/>
      <label htmlFor="ckb">
        <img src="VG/vg-.svg" height={88} width={88} className={styles.init}/>
        <img src="VG/vg.svg" height={88} width={88} className={styles.hover} />
        <img src="VG/vg+.svg" height={88} width={88} className={styles.done} />
       <span className={styles.lab}>: vegan :</span>
      </label>
    </div>
  );
}
