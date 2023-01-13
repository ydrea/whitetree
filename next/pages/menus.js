// import Head from "next/head";
import Link from "next/link";
import { parseCookies } from "nookies";
import Form from "./form";
import styles from "../styles/Home.module.css";
import { API_URL, fromImageToUrl } from "../utils/urls";
import { useSelector, useDispatch } from "react-redux";
//
export async function getServerSideProps(context) {
  // console.log(context);
  const { req } = context;
  const res = await fetch(`${API_URL}/menus`);
  const items = await res.json();
  // console.log(items);
  return {
    props: {
      items,
    },
  };
}
//
function menus({ items, context }) {
  const jwt = parseCookies(context).jwt;
  const { user, userSet } = useSelector();
  console.log("userMenus", user);

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
                    <p>{i.name} </p>
                    <p>{i.description}</p>
                    <input type="checkbox" />
                    {console.log(i.icons)}
                    {i.icons.map((ii) => ii.icon.name)}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </span>{" "}
      <Form jwt={jwt} user={user} />
    </div>
  );
}

export default menus;
