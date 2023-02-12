import { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

function Form() {
  const { currentUser } = useAuth();
  const [title, titleSet] = useState("");
  const [description, descriptionSet] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <div className="w-full max-w-[55ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5">
      {currentUser && (
        <form className="flex-item-stretch " onSubmit={() => postMenus()}>
          <input
            placeholder="title"
            type="text"
            value={title}
            onChange={(e) => titleSet(e.target.value)}
            className="outline-olive bg-paleo p-3 text-base sm:text-lg flex-1 mx-3 my-3 max-w-[268px]"
          />
          <input
            placeholder="description"
            type="text"
            value={description}
            onChange={(e) => descriptionSet(e.target.value)}
            className="outline-olive bg-paleo p-3 text-base sm:text-lg flex-1 mx-3 my-3 max-w-[268px]"
          />
          <input
            type="submit"
            value="ADD"
            className=" 
      border border-solid border-black py-1 mx-3 text-center uppercase 
bg-olive text-white font-medium text-base hover:opacity-80"
          />
        </form>
      )}
      <button
        className=" 
      border border-solid border-black py-1 mx-3 mb-3 text-center uppercase 
      text-base hover:opacity-80"
      >
        add article
      </button>
    </div>
  );
}

export default Form;
