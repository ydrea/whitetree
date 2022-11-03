import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/header.module.css";

//

const Nav = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  //

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/client">
              <a>Client</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">
              <a>Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  // return (
  //   //prettier-ignore
  //   <nav className="flex flex-wrap items-center justify-between
  //         w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
  //     <ul>
  //       <div>
  //         <Link href="/" passHref>
  //           <a>
  //             {/* eslint-disable @next/next/no-img-element */}
  //             <img
  //               className="m-3"
  //               src="/strapi-logo.png"
  //               width={200}
  //               height={50}
  //               alt="Strapi Logo"
  //             />
  //           </a>
  //         </Link>
  //       </div>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         id="menu-button"
  //         className="h-6 w-6 cursor-pointer md:hidden block"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="M4 6h16M4 12h16M4 18h16"
  //         />
  //       </svg>

  //       <div
  //         className="hidden w-full md:flex md:items-center md:w-auto"
  //         id="menu"
  //       >
  //         <ul
  //           className="
  //             pt-4
  //             text-base text-gray-700
  //             md:flex
  //             md:justify-between
  //             md:pt-0 space-x-2"
  //         >
  //           <li>
  //             <Link href="/">
  //               <a className="md:p-2 py-2 block hover:text-purple-400">Home</a>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/films">
  //               <a className="md:p-2 py-2 block hover:text-purple-400" href="#">
  //                 Films
  //               </a>
  //             </Link>
  //           </li>
  //           <li>
  //             <form>
  //               {" "}
  //               <button onClick={() => signIn()}>signIn</button>
  //               {console.log(session)}
  //             </form>
  //           </li>
  //           <li>
  //             <Link href="/register">
  //               <a className="md:p-2 block py-2 hover:text-purple-400 text-black">
  //                 Register
  //               </a>
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </ul>{" "}
  //   </nav>
  // );
};

export default Nav;
