"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";

function Login({ searchParams }) {
  const email = useRef("");
  const pass = useRef("");
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      identifier: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  //
  return (
    <div>
      {searchParams?.message && <p>{searchParams.message}</p>}
      <form>
        <input
          lableText="User Name"
          onChange={(e) => (email.current = e.target.value)}
        />
        <input
          lableText="Password"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
