import { signInAnonymously } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";

function FormLarge({
  cement,
  cementSet,
  cementList,
  cementListSet,
  handleAddCement,
}) {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [trig, trigSet] = useState(true);
  //

  useEffect(() => {
    console.log(cementList);
  }, [cementList]);

  return (
    <div>
      <div className="flex flex-col justify-center">
        {trig && (
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="textarea-1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              daj cement!
            </label>
            <textarea
              className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-pale bg-clip-padding
          border border-solid border-white
          rounded
          transition
          ease-in-out
          m-0
          focus:text-dblk focus:bg-white focus:border-olive focus:outline-none
        "
              id="textarea-1"
              rows="3"
              placeholder="Your comment"
              value={cement}
              onChange={(e) => cementSet(e.target.value)}
            ></textarea>
          </div>
        )}
        <button
          onClick={() => handleAddCement()}
          className="border border-solid border-addblk py-1 mx-3 mb-3 
            text-center uppercase text-base duration-300 hover:opacity-70"
        >
          add comment
        </button>
      </div>
    </div>
  );
}

export default FormLarge;
