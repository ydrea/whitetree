import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import Account from "../components/Account";
import { useAuth } from "../context/authContext";
import styles from "../styles/Home.module.css";

import { useEffect, useState } from "react";
import { Mod } from "../components/Modal";
import Form from "../components/Form";
import FormLarge from "../components/FormLarge";

export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  const [openModal, openModalSet] = useState(false);

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
            <Form />
          </div>

          <p className={styles.card}>
            <h5>Learn &rarr;</h5>
            <p>
              <FormLarge />
            </p>
          </p>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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
