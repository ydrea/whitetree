import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `http://localhost:1337/api/producers/${params.id}?populate=*`
  );
  console.log(res);
  return {
    props: { item: await res.json() },
  };
}

export default function Restaurant({ item }) {
  return (
    <div className={styles.grid}>
      <Link className={styles.card} href="/">
        <h2>
          <a>
            &lArr;
            {item.data.attributes.name}
          </a>
        </h2>
      </Link>
      {/* <p>{item.data.attributes.address}</p> */}

      {/* <img src={item.data.attributes.main_img.data.attributes.name} /> */}
      {/* {JSON.stringify(item.data.attributes.main_img.data.attributes.name)} */}
    </div>
  );
}
