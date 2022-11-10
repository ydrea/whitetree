import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";
//
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      {console.log(pageProps)}
    </AuthProvider>
  );
}

export default MyApp;
