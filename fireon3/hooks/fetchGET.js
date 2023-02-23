import React, { useState } from "react";
import { useAuth } from "../context/authContext";

export default function useFetchGet() {
  const [loading, loadingSet] = useState(false);
  const [err, errSet] = useState(null);
  const { currentUser } = useAuth();

  //
  return <div>useFetch</div>;
}
