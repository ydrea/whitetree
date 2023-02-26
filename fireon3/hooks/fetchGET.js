import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { db } from "../db/firestore";

export default function useFetchGet() {
  const [loading, loadingSet] = useState(false);
  const [err, errSet] = useState(null);
  const [todos, todoSet] = useState(null);
  const { currentUser } = useAuth();
  //
  console.log(currentUser);
  //
  useEffect(() => {
    async function getCement() {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docFetch = await getDoc(docRef);
        if (docFetch.exists()) {
          todoSet(docFetch.data().todos);
        }
      } catch (error) {
        errSet("um?");
      }
    }
  }, []);
  //
  return { err, loading, todos };
}
