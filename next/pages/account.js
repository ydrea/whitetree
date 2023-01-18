import Head from "next/head";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deLete, selectUser } from "../redux/userSlice";
import { parseJwt } from "../utils/parseJwt";
import { useOrders } from "../utils/useOrders";
// //

export default function account({ jwt, userId }) {
  console.log(JSON.stringify(userId));
  const { orders, loading } = useOrders();
  const [, userIdSet] = useState();
  // //
  const { email, pass } = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutUser = () => {
    destroyCookie(null, "jwt");
    userIdSet(null);
    dispatch(deLete(email));
    // console.log("Logout", user);
  };

  //
  if (!email) {
    return (
      <div>
        <p>
          Please {<Link href="/login">Login</Link>} or{" "}
          {<Link href="/register">Register</Link>} before accessing this page
        </p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Your Account</title>
        <meta name="description" content="Your orders will be shown here" />
      </Head>
      <h2>Account Page</h2>

      <h3>Your Orders</h3>
      {loading && <p>Orders are Loading</p>}
      {orders.map((order) => (
        <div key={order.id}>
          {new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
          {order.product.name} ${order.total} {order.status}
        </div>
      ))}
      <hr />
      <p>Logged in as userId {email}</p>
      <p>
        <a href="#" onClick={logoutUser}>
          Logout
        </a>
      </p>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context);
  const jwt = parseCookies(context).jwt || null;
  if (jwt) {
    const userP = parseJwt(jwt);
    const userId = userP.id;
    return {
      props: { jwt, userId },
    };
  } else {
    return {
      props: {},
    };
  }
}
