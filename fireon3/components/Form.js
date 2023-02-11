import { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

function Form() {
  const { userNfo } = useAuth();
  const [ime, imeSet] = useState("");
  const [description, descriptionSet] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5">
      {userNfo && (
        <form onSubmit={() => postMenus()}>
          <input
            placeholder="title"
            type="text"
            value={ime}
            onChange={(e) => imeSet(e.target.value)}
          />
          <input
            placeholder="description"
            type="text"
            value={description}
            onChange={(e) => descriptionSet(e.target.value)}
          />
          <input type="submit" value="submit" />
        </form>
      )}
      <button
        className=" 
      border border-solid border-black py-1 px-1 text-center uppercase text-lg"
      >
        add article
      </button>
    </div>
  );
}

export default Form;
