import styles from "../../styles/Ico.module.css";

export default function Vt() {
  return (
    //prettier-ignore
    <div  className={styles.container}>
      <input className={styles.ckb} type="checkbox" name="vt" id="ckb"/>
      <label htmlFor="ckb">
        <img src="VT/vt-.svg" height={88} width={88} className={styles.init}/>
        <img src="VT/vt.svg" height={88} width={88} className={styles.hover} />
        <img src="VT/vt+.svg" height={88} width={88} className={styles.done} />
       <span className={styles.lab}>: vegetarian :</span>
      </label>
    </div>
  );
}
