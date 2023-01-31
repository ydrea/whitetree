import Link from "next/link";
import { useRouter } from "next/router";
// import { parseCookies } from "nookies";
import styles from "../styles/Header.module.css";
import { useEffect } from "react";
//

//

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const userEmail = "tester";

  useEffect(() => {
    console.log("Header", userEmail);
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
      <div className={styles.cntnr}>
        <div className={styles.title}>
          <Link href="/about">
            <h3 className={styles.h3}>about</h3>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/icon">
            <h3 className={styles.protected}>icon</h3>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/products">
            <h3 className={styles.h3}>products</h3>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/restaurants">
            <h3 className={styles.h3}>restaurants</h3>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/producers">
            <h3 className={styles.h3}>producers</h3>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/menus">
            <h3 className={styles.h3}>menus</h3>
          </Link>
        </div>
      </div>
      <div className={styles.auth}>
        {/* login indicator */}
        {userEmail !== null ? (
          <>
            <Link href="/account">
              account {userEmail}
              <img src="/user_avatar.png" alt={"alt"} />
            </Link>
          </>
        ) : (
          <Link href="/login">Log In</Link>
        )}
      </div>
    </div>
  );
}
