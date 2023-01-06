import styles from "../styles/Ico.module.css";
import Image from "next/image";

//

const Checkbox = ({ icon, id, name, value, onChange }) => {
  console.log(icon, id);
  return (
    //prettier-ignore
    <div className={styles.container}>
      <input className={styles.ckb} id={id} name={name} type="checkbox"
        checked={value} onChange={onChange}
      />
      <label htmlFor={id}>
        <Image
          src={`${name}/${icon[0]}`}
          height={88}
          width={88}
          className={styles.init}
        />
        <Image
          src={`${name}/${icon[1]}`}
          height={88}
          width={88}
          className={styles.hover}
        />
        <Image
          src={`${name}/${icon[2]}`}
          height={88}
          width={88}
          className={styles.done}
        />
        <span className={styles.lab}>: {id} :</span>
      </label>{" "}
    </div>
  );
};

export default Checkbox;
