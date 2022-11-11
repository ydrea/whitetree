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
      await magic.user.logout();
      userSet(null);
      router.push("/");
    } catch (error) {
      console.log("logoutUser error", error);
    }
  };

  const getToken = async () => {
    try {
      const token = await magic.user.getIdToken();
      return token;
    } catch (error) {}
  };

  const persistSession = async () => {
    try {
      const isLoggedIn = magic.user.isLoggedIn();
      if (isLoggedIn) {
        const { email } = await magic.user.getMetaData();
        userSet({ email });

        const token = getToken();
        console.log("token", token);
      }
    } catch (error) {}
  };

  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY);
    persistSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, getToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
