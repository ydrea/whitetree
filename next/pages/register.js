import Head from "next/head";
import Router from "next/router";
import { setCookie } from "nookies";
import { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { useDispatch } from "react-redux";
import styles from "../styles/Login.module.css";
//

//
export default function Register() {
  //
  const dispatch = useDispatch();

  const [username, usernameSet] = useState("");
  const [email, emailSet] = useState("");
  const [pass, passSet] = useState("");

  const { user, userSet } = useContext(HeaderContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regINfo = {
      username: username,
      email: email,
      password: pass,
    };
    //
    const register = await fetch(`http://localhost:1337/auth/local/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regINfo),
    });
    const registeRes = await register.json();
    console.log("logINfo", regINfo);
    console.log("loginRES", registeRes);
    // //cookie
    setCookie(null, "jwt", registeRes.jwt, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    userSet(email);
    Router.push("/account");
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
        <title>Register</title>
        <meta
          name="description"
          content="Register here to be able to purchase"
        />
      </Head>

      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={username}
          onChange={(e) => usernameSet(e.target.value)}
          type="text"
          placeholder="username ..."
        />
        <input
          className={styles.input}
          value={email}
          onChange={(e) => emailSet(e.target.value)}
          type="email"
          placeholder="Email address..."
        />
        <input
          className={styles.input}
          value={pass}
          onChange={(e) => passSet(e.target.value)}
          type="password"
          placeholder="Password..."
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
