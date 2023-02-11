import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";
//
import { useAuth } from "../context/authContext";
import Nav from "./Nav";
//
export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("Header", currentUser);
  });

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <Link href="#" onClick={goBack}>
            {"<"} Back{" "}
          </Link>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <img src="/glogo.svg" height="150" alt="logo" />
          <h3 className={styles.h3}>WHITE TREE</h3>
        </Link>
      </div>
      <Nav />
      <div className={styles.auth}>
        {/* login indicator */}
        {currentUser !== null ? (
          <>
            <Link href="/account">
              <i class="fa-regular fa-user"></i>
              <p>&#9733;</p>
              <p>&#9734;</p>
            </Link>
          </>
        ) : (
          <Link href="/login">Log In</Link>
        )}
      </div>
    </div>
  );
}
