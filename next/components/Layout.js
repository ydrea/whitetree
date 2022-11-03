import Head from "next/head";
import { UserProvider } from "../utils/authContext";
import Nav from "./Nav";
//
const Layout = ({ user, loading = false, children }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <title>white tree</title>
      </Head>
      <Nav />
      <main>
        <div
          className="flex justify-center items-center bg-white
          mx-auto w-2/4 rounded-lg "
        >
          <div className="text-3x1 font-medium"> {children} </div>
        </div>
      </main>
    </UserProvider>
  );
};

export default Layout;
