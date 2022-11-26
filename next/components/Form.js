// import { useRouter } from 'next/router'
// import { loadStripe } from '@stripe/stripe-js'
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
  //  //
  //   useEffect(() => {
  //     async function toKen() {
  //       await getToken();
  //     }
  //     toKen();
  //   }, []);
  //   //
  async function handleSubmit() {
    const formData = { name: name, description: description };
    console.log(formData);
    //prettier-ignore
    // const token = await getToken()
    // console.log(token);
    const add = await fetch(`${API_URL}/menus`, {
      method: "POST",
      headers: {
        Authorisation: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const res = await add.json();
    console.log(res);
  }
  return (
    <div className={styles.contain}>
      <form onSubmit={handleSubmit}>
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
