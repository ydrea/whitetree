import { Link } from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../utils/urls";
import Modar from "./Modal";

export default function Fetched() {
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  //const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);
  const { user, getToken } = useContext(AuthContext);

  function toggleShow() {
    setShow(!show);
  }

  const router = useRouter();
  //   const location = useLocation();
  //   const navigate = useNavigate();
  const jwt = getToken();
  const url = API_URL + "/menus";
  const {
    request,
    appendData,
    data: { customers } = {},
    errorStatus,
  } = useFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer + ${jwt}`,
    },
  });

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    console.log(request, appendData, customers, errorStatus);
  });

  function newCustomer(name, industry) {
    appendData({ name: name, industry: industry });

    if (!errorStatus) {
      toggleShow();
    }
  }

  return (
    <>
      <h1>Here are our customers:</h1>
      {customers
        ? customers.map((customer) => {
            return (
              <div className="m-2" key={customer.id}>
                <Link to={"/customers/" + customer.id}>
                  <button> {customer.name}</button>
                </Link>
              </div>
            );
          })
        : null}

      <Modar newCustomer={newCustomer} show={show} toggleShow={toggleShow} />
    </>
  );
}
