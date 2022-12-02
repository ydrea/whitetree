import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
//import {createContext, useContextSelector} from 'use-context-selector'

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  /**
   * Log the user in
   * @param {string} email
   */
  const loginUser = async (email) => {
    try {
      await login({ email });
      setUser({ email });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Log the user out
   */
  const logoutUser = async () => {
    try {
      await logout();
      setUser(null);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * If user is logged in, get data and display it
   */
  const checkUserLoggedIn = async () => {
    try {
      // const isLoggedIn = await magic.user.isLoggedIn();

      if (isLoggedIn) {
        // const { email } = await magic.user.getMetadata();
        setUser({ email });
        //Add this just for test
        const token = await getToken();
        console.log("checkUserLoggedIn token", token);
        localStorage.setItem("access", token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /**
   */
  const getToken = async () => {
    try {
      const token = await magic.user.getIdToken();
      return token;
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Reload user login on app refresh
   */
  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, logoutUser, loginUser, getToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
