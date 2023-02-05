import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

//
function Nav() {
  const router = useRouter();
  const nav = [
    { id: 1, name: "about" },
    { id: 2, name: "restaurants" },
    { id: 3, name: "producers" },
    { id: 4, name: "products" },
    { id: 5, name: "menus" },
  ];
  return (
    <div>
      <div className={styles.cntnr}>
        {nav.map((i) => (
          <div className={styles.title} key={i.id}>
            <Link href={i.name}>
              <h3 className={styles.h3}>{i.name}</h3>
            </Link>
          </div>
        ))}

        <div className={styles.title}>
          <Link href="/icon">
            <h3 className={styles.protected}>icon</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
