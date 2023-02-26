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
    <div>
      FormImage
      <input
        type="file"
        onChange={(e) => {
          uploadImgSet(e.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
};

export default FormImage;
