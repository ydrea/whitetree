import Form from "../components/Form";
import { API_URL } from "../utils/urls";
//
//
export async function getServerSideProps() {
  const logINfo = {
    username: "Medo",
    email: "medo.wrld@gmail.com",
    password: "Medo1234",
  };
  //
  const login = await fetch(`http://localhost:1337/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logINfo),
  });
  const loginRes = await login.json();
  //
  const res = await fetch(`${API_URL}/medos/`, {
    headers: {
      Authorization: `Bearer ${loginRes.jwt}`,
    },
  });
  console.log(res);
  const items = await res.json();
  console.log(items);
  return {
    props: {
      items: { 1: "alo" },
      authData: loginRes,
    },
  };
}
//
function medos({ items, authData }) {
  console.log(items, authData);
  return (
    <div>
      <h3>medos</h3>
      <span> </span>
      <Form />
    </div>
  );
}

export default medos;
