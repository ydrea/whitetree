import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../styles/Form.module.css";
import { API_URL } from "../utils/urls";
//
function Form() {
  const [name, nameSet] = useState("");
  const [description, descriptionSet] = useState("");

  const { user, getToken } = useContext(AuthContext);
  console.log(user);

  //update with a custom hook
  const useMenus = (user, getToken) => {
    const [loading, loadingSet] = useState(false);
    const [formData, formDataSet] = useState({
      name: name,
      description: description,
    });
    console.log(formData);

    useEffect(() => {
      const postIt = async () => {
        loadingSet(true);
        if (user) {
          try {
            const jwt = await getToken();
            const add = await fetch(`${API_URL}/menus`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${jwt}`,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const data = await add.json();
            formDataSet(data);
          } catch (error) {
            formDataSet({});
          }
        }
        loadingSet(false);
      };
      postIt();
    }, [user]);
    return formData, loading;
  };
  // //
  // async function handleSubmit() {
  //   const formData = { name: name, description: description };
  //   console.log(formData);
  //   //prettier-ignore
  //   // const token = await getToken()
  //   // console.log(token);
  //   const add = await fetch(`${API_URL}/menus`, {
  //     method: "POST",
  //     headers: {
  //       Authorisation: `Bearer ${token}`,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const res = await add.json();
  //   console.log(res);
  // }
  return (
    <div className={styles.contain}>
      <form onSubmit={useMenus}>
        <input
          type="text"
          value={name}
          onChange={(e) => nameSet(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => descriptionSet(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
