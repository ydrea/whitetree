import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
// import useFetch from "../hooks/useFetch";

import styles from "../styles/Form.module.css";
import { API_URL } from "../utils/urls";
//
function Form() {
  const [ime, imeSet] = useState("");
  const [description, descriptionSet] = useState("");
  const { user, getToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  //
  const url = API_URL + "/menus";
  //
  useEffect(() => {
    console.log(user);
  }, []);

  const postMenus = async () => {
    if (user) {
      // e.preventDefault();
      setLoading(true);
      console.log(user);
      try {
        const jwt = await getToken();
        console.log(jwt);
        const data = { ime: ime, description: description };
        const add = await fetch(url, {
          // mode: "no-cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer` + localStorage.getItem("access"),
          },
          body: JSON.stringify(data),
        });
        const resUl = await add.json();
        console.log(resUl);
      } catch (err) {
        console.log("nie", err); // postMenus([]);
      }
      setLoading(false);
    }
  };
  // }, [user]);

  return (
    <div className={styles.contain}>
      <form onSubmit={() => postMenus()}>
        <input
          type="text"
          value={ime}
          onChange={(e) => imeSet(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => descriptionSet(e.target.value)}
        />
        <input onClick={console.log("eee")} type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
