const url = API_URL + "/menus";
// //
useEffect(() => {
  console.log(user);
}, []);

const postMenus = async () => {
  if (user) {
    // e.preventDefault();
    setLoading(true);
    try {
      const data = { ime: ime, description: description };
      const add = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer + ${jwt}`,
        },
        body: JSON.stringify(data),
      });
      const resUl = await add.json();
      console.log(resUl);
    } catch (err) {
      console.log("nie", err);
    }
    setLoading(false);
  }
};
