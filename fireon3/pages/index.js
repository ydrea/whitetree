import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Login from "../components/Login";
import Account from "../components/Account";
import { useAuth } from "../context/authContext";
import styles from "../styles/Home.module.css";
// import { replacer } from "../hooks/regEx";
import { useEffect, useState } from "react";
import { Mod } from "../components/Modal";
import Form from "../components/Form";
import FormLarge from "../components/FormLarge";

export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const [openModal, openModalSet] = useState(false);
  //
  const [cementAdd, cementAddSet] = useState(false);
  const [cement, cementSet] = useState("");
  const [cementList, cementListSet] = useState({});

  //prettier-ignore
  async function handleAdd() {
    if (!cement) {
      return;
    }
    //Object.keys() returns an array 
    const newKey =
    // 1, ili...
      Object.keys(cementList).length === 0 ? 1 :
        //...najveci do sada +1
        Math.max(...Object.keys(cementList)) + 1;
        //se dodaje na listu
    cementListSet({ ...cementList, [newKey]: cement });
  }
  //
  function replacer(email) {
    const newEmail = email.replace(/\@.*/, "... ");
    console.log("new", newEmail);
    return newEmail;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>white tree</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => openModalSet(true)}>open</button>
      <Mod open={openModal} closeMe={() => openModalSet(false)}>
        dalMo
      </Mod>

      <main className={styles.main}>
        {!currentUser && <Login />}
        {currentUser && <Account />}

        <div className={styles.grid}>
          <div className={styles.card}>
            <h5>Form</h5>
            {/* <Form /> */}
          </div>

          <div className={styles.card}>
            <p>
              <FormLarge
                cement={cement}
                cementSet={cementSet}
                cementList={cementList}
                cementListSet={cementListSet}
                handleAdd={handleAdd}
              />
            </p>
          </div>
          {Object.keys(cementList).map((cement, index) => (
            <div className={styles.card} key={index}>
              <b> {replacer(currentUser.email)}</b>
              <i class="fa-solid fa-trash-can"></i>
              <i class="fa-solid fa-pencil"></i>
              <p>{cementList[cement]}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
