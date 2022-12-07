// import Head from "next/head";
import Link from "next/link";
import { parseCookies } from "nookies";
import Form from "../components/Form";
import styles from "../styles/Home.module.css";
import { twoDecimals } from "../utils/format";
import { API_URL, fromImageToUrl } from "../utils/urls";
//
//
export async function getServerSideProps(context) {
  console.log(context);

  const res = await fetch(`${API_URL}/menus/`);
  const items = await res.json();
  return {
    props: {
      items,
    },
  };
}
//
function menus({ items, context }) {
  const jwt = parseCookies(context).jwt;
  const user = parseCookies(context).email;
  console.log(context, "user", user);
  return (
    <div>
      <h3>menus</h3>
      <span>
        {" "}
        {items.map((i) => (
          <div className={styles.product} key={i.id}>
            <Link href={`/menus/${i.id}`}>
              <a>
                <div className={styles.product__Rows}>
                  <div className={styles.product__ColImg}>
                    <img src={fromImageToUrl(i.img_main)} />
                  </div>
                  <div className={styles.product__Col}>
                    {i.ime} &euro;{twoDecimals(i.price)}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </span>{" "}
      {/* <Fetched /> */}
      <Form jwt={jwt} />
    </div>
  );
}

export default menus;
