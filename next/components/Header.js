import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../styles/header.module.css";
import Login from "./Login";

export default () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const { user, logoutUser } = useContext(AuthContext);

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
        <Link href="/">Home</Link>
      </div>

      <div className={styles.auth}>
        {user ? (
          <>
            {" "}
            <Link href="/account">{user.email}</Link>
            <button className={styles.buttonPrimary} onClick={logoutUser}>
              logout
            </button>
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};
