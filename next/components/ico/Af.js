import styles from "../../styles/Ico.module.css";

export default function Af() {
  return (
    //prettier-ignore
    <div  className={styles.container}>
      <input className={styles.ckb} type="checkbox" name="af" id="ckb"/>
      <label htmlFor="ckb">
        <img src="AF/af-.svg" height={88} width={88} className={styles.init}/>
        <img src="AF/af.svg" height={88} width={88} className={styles.hover} />
        <img src="AF/af+.svg" height={88} width={88} className={styles.done} />
       <span className={styles.lab}>: affordable :</span>
      </label>
    </div>
  );
}
