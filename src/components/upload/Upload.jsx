import React, { useEffect, useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase";

const Upload = () => {
  const [listImage, setListImage] = useState([]);
  const handleUpLoadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);
    const storageRef = ref(storage, `images/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setListImage([...listImage, url]);
      });
    });
  };

  return (
    <div className="App">
      <input type="file" onChange={handleUpLoadFile} />
      {listImage && listImage.map((img) => <img src={img} />)}
    </div>
  );
};

export default Upload;
