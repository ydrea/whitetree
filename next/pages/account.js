import Head from "next/head";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { logoutUser } from "../utils/format";
import { API_URL } from "../utils/urls";

export async function getServerSideProps(context) {
  // console.log(context);
  const { req } = context;
  console.log("REQ:", req);
  console.log("RES:", req.cookies);
  const user = Object.keys(req.cookies);
  const email = user[5];
  console.log("Acc", user, email);

  return {
    props: {
      user,
      email,
    },
  };
}
//
const useOrders = (context, user) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const jwt = parseCookies(context).jwt;
  //
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = jwt;
          const orderRes = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await orderRes.json();
          setOrders(data);
        } catch (err) {
          setOrders([]);
        }
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return { orders, loading };
};

export default ({ user, email }) => {
  const { orders, loading } = useOrders();
  // //
  // const logoutUser = () => {
  //   console.log(context, "jwt");
  // };

  //
  if (!user) {
    return (
      <div>
        <p>Please Login or Register before accessing this page</p>
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
      <p>Logged in as {email}</p>
      <p>
        <a href="#" onClick={logoutUser}>
          Logout
        </a>
      </p>
    </div>
  );
};
