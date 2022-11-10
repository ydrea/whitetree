import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//
export default function Account() {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) {
    return <p>Please Login / Register</p>;
  }

  return (
    <div>
      <Head>
        <title>account</title>
      </Head>
      <Link href="#" onClick={logoutUser}></Link>
    </div>
  );
}
