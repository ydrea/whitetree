import Link from "next/link";
import { useRouter } from "next/router";
// import { parseCookies } from "nookies";
import styles from "../styles/Header.module.css";

export async function getServerSideProps(context) {
  const { req } = context;
  const user = Object.keys(req.cookies);
  console.log(user[3]);
  return {
    props: {
      user,
    },
  };
}

export default (user) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  /**
   * Log the user out
   */
  const logoutUser = async () => {
    try {
      await destroyCookie("jwt");
      setUser(null);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            {"<"} Back{" "}
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <img src="/glogo.svg" height="150" alt="logo" />
            <h3 className={styles.h3}>WHITE TREE</h3>
          </a>
        </Link>
      </div>
      <div className={styles.cntnr}>
        <div className={styles.title}>
          <Link href="/about">
            <a>
              <h3 className={styles.h3}>about</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/icons">
            <a>
              <h3 className={styles.protected}>icons</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/products">
            <a>
              <h3 className={styles.h3}>products</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/restaurants">
            <a>
              <h3 className={styles.h3}>restaurants</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/producers">
            <a>
              <h3 className={styles.h3}>producers</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/menus">
            <a>
              <h3 className={styles.h3}>menus</h3>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.auth}>
        {user ? (
          <>
            <Link href="/account">
              <a>
                account
                <img src="/user_avatar.png" alt={user.email} />
              </a>
            </Link>

            <p>Logged in as {user}</p>
            <p>
              <a href="#" onClick={logoutUser}>
                Logout
              </a>
            </p>
          </>
        ) : (
          <Link href="/login">
            <a>Log In</a>
          </Link>
        )}
      </div>
    </div>
  );
};
