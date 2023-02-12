import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";

function FormLarge() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [trig, trigSet] = useState(false);
  //
  const [cement, cementSet] = useState("");

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            for="textarea-1"
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
            rows="5"
            placeholder="Your comment"
            value={cement}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default FormLarge;
