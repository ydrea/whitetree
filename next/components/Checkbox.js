import styles from "../styles/Ico.module.css";

import { useDispatch, useSelector } from "react-redux";

//
const Checkbox = ({ short, icon, id, name, value, onChange }) => {
  console.log(icon, value, id);

  // const dispatch = useDispatch();

  return (
    //prettier-ignore
    <div className={styles.container}>
      <input className={styles.ckb} id={id} name={name} type="checkbox"
        value={value} 
        // fav={checked}
        onChange={onChange}
      />
      <label className={styles.gridItem} htmlFor={id}>
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
      
      <span className={styles.lab}>{short}</span>
      </label>{" "}
    </div>
  );
};

export default Checkbox;
