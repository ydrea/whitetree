import styles from "../styles/Ico.module.css";
import Image from "next/image";

//

const Checkbox = ({ icon, id, name, value, onChange }) => {
  return (
    //prettier-ignore
    <div  className={styles.container}>
      <input className={styles.ckb} id={id} name={name} type="checkbox" checked={value} onChange={onChange} />
      <label htmlFor={id}>
        <img src={icon[0]} height={88} width={88} className={styles.init} />
        <img src={icon[1]} height={88} width={88} className={styles.hover} />
        <Image src={icon[2]} height={88} width={88} className={styles.done} />
        <span className={styles.lab}>: {name} :</span>
      </label>{" "}
    </div>
  );
};

export default Checkbox;
