import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const usePosts = (user, getToken) => {
  const [posts, postsSet] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = await getToken();
          const formData = { ime: ime, description: description };
          const postRes = await fetch(`${API_URL}/menus`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer` + localStorage.getItem("access"),
            },
            body: JSON.stringify(formData),
          });
          const data = await postRes.json();
          postsSet(data);
          console.log(posts);
        } catch (err) {
          postsSet([]);
        }
      }
      setLoading(false);
    };
    fetchPosts();
  }, [user]);
  return { posts, loading };
};

export default () => {
  const [ime, imeSet] = useState("");
  const [description, descriptionSet] = useState("");

  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { posts, loading } = usePosts(user, getToken);

  // if (!user) {
  //   return (
  //     <div>
  //       <p>Please Login or Register before accessing this page</p>
  //       <Link href="/">
  //         <a>Go Back</a>
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Head>
        <title>Your input</title>
        <meta name="description" content="Your orders will be shown here" />
      </Head>
      <h2>Form Page</h2>
      <form onSubmit={() => usePosts()}>
        <input
          type="text"
          value={ime}
          onChange={(e) => imeSet(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => descriptionSet(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>

      <hr />
      {/* <p>Logged in as {user.email}</p> */}
      <p>
        {/* <a href="#" onClick={logoutUser}>
          Logout
        </a> */}
      </p>
    </div>
  );
};
