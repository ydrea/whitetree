import { Magic } from "magic-sdk";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
//
const AuthContext = createContext();
//
let magic;
//
export const AuthProvider = (props) => {
  const [user, userSet] = useState(null);
  const router = useRouter();

  const loginUser = async (email) => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      userSet({ email });
      router.push("/");
    } catch (error) {
      userSet(null);
    }
  };

  const logoutUser = async () => {
    try {
      await magic.auth.logout();
      userSet(null);
    } catch (error) {
      console.log("grijeska");
    }
  };

  const persistSession = async () => {
    try {
      const isLoggedIn = magic.user.isLoggedIn();
      if (isLoggedIn) {
        const { email } = await magic.user.getMetaData();
        userSet({ email });
      }
    } catch (error) {}
  };

  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY);
    persistSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
