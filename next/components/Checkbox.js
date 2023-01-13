import styles from "../styles/Ico.module.css";

import { toggleFav } from "../redux/iconSlice";
import { useDispatch, useSelector } from "react-redux";

//
const Checkbox = ({ short, icon, id, name, fav }) => {
  console.log(icon, fav);
  const dispatch = useDispatch();

  const handleFavCheck = () => {
    dispatch(
      toggleFav({
        id: id,
        fav: !fav,
      })
    );
  };
  return (
    //prettier-ignore
    <div className={styles.container}>
      <input className={styles.ckb} id={id} name={name} type="checkbox"
        checked={fav} 
        onChange={() => handleFavCheck()}
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
