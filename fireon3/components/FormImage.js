import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../db/firestore";
import { v4 } from "uuid";
//

const FormImage = () => {
  const [uploadImg, uploadImgSet] = useState(null);
  //
  const handleUpload = () => {
    if (uploadImg == null) return;

    const imgRef = ref(storage, `wt/${uploadImg.name + v4()}`);
    uploadBytes(imgRef, uploadImg).then(alert("uploaded"));
  };

  return (
    <div className="mx-1">
      FormImage
      <input
        type="file"
        onChange={(e) => {
          uploadImgSet(e.target.files[0]);
        }}
      />
      <button
        onClick={handleUpload}
        className="border border-solid border-addblk py-1 px-3 my-1 mb-3 
      text-center uppercase text-base duration-300 hover:opacity-70"
      >
        upload
      </button>
    </div>
  );
};

export default FormImage;
