import Head from "next/head";
import Router from "next/router";
import { setCookie } from "nookies";
import { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Login.module.css";
import { deLete, selectUser, upDate } from "../redux/userSlice";
//

//
export default function Login() {
  //
  const dispatch = useDispatch();
  const [mail, emailSet] = useState("");
  const [pwd, passSet] = useState("");

  const user = useSelector(selectUser);
  console.log(user);
  const { email, pass } = useSelector(selectUser);
  console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logINfo = {
      identifier: mail,
      password: pwd,
    };

    dispatch(upDate(user));

    const login = await fetch(`http://localhost:1337/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logINfo),
    });
    const loginRes = await login.json();
    console.log("logINfo", logINfo);
    console.log("loginRES", loginRes);
    // //cookie
    setCookie(null, "jwt", loginRes.jwt, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    // userXSet(email);

    Router.push("/icon");
  };
  // //
  // useEffect(() => {
  //   userSet(email);
  //   console.log("user", user);
  // }, []);
  // //
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to be able to purchase" />
      </Head>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={mail}
          onChange={(e) => emailSet(e.target.value)}
          type="email"
          placeholder="Email address..."
        />
        <input
          className={styles.input}
          value={pwd}
          onChange={(e) => passSet(e.target.value)}
          type="password"
          placeholder="Password..."
        />
        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
