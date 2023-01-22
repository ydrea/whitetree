import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Header() {
  const { data: session } = useSession();
  // console.log(session.user.user);
  return (
    <div>
      <Link href={"/"}>home</Link>
      <Link href={"/restaurants"}>restaurants</Link>
      <Link href={"/user/account"}>account</Link>
      <div>
        {session?.user ? (
          <>
            <p> {session.user.user.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Header;
