import React from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const UploadImage = () => {
  const [imageList, setImageList] = React.useState([]);
  const handleOnChange = (e) => {
    console.log(e.target.files);
    const fileImage = e.target.files;
    if (!fileImage) return;

    for (let i = 0; i < fileImage.length; i++) {
      let image = fileImage[i];
      const storages = storage;
      const imgRefs = ref(storages, `audios/${image.name}`);
      uploadBytes(imgRefs, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("url", url);
          setImageList([...imageList, url]);
        });
      });
    }
  };
  return (
    <div>
      <input type="file" multiple onChange={handleOnChange} />
      {imageList && imageList.map((img) => <img src={img} />)}
    </div>
  );
};

export default UploadImage;
