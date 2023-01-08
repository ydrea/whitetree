import styles from "../styles/Ico.module.css";

//
const Checkbox = ({ short, icon, id, name, value, onChange }) => {
  console.log(icon, value);
  return (
    //prettier-ignore
    <div className={styles.container}>
      <input className={styles.ckb} id={id} name={name} type="checkbox"
        checked={value} onChange={onChange}
      />
      <label htmlFor={id}>
        <img
          src={`${name}/${icon[0]}`}
          height={68}
          width={68}
          className={styles.init}
        />
        <img
          src={`${name}/${icon[1]}`}
          height={68}
          width={68}
          className={styles.hover}
        />
        <img
          src={`${name}/${icon[2]}`}
          height={68}
          width={68}
          className={styles.done}
        />
      
      </label>{" "}
        <div className={styles.lab}>{short}</div>
    </div>
  );
};

export default Checkbox;
