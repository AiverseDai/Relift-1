import React, { useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { RiFileUploadFill, RiImageAddLine } from "react-icons/ri";
import "./style.css";
import { GoFileSymlinkFile } from "react-icons/go";

// import from '../../assets/images/images.png'
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import Toast from "../../Component/Toast";

export default function Upload({
  imagHandler,
  resetImage,
  Component,
  accept,
  uploadTitle,
  id,
  heading,
}) {
  const [imgFile, setImgFile] = React.useState("");
  const changeHandler = (e) => {
    // if (resetImage) {
    //   return setImgFile("");
    // }

    // if ((e?.target?.files[0]).size / 1024 <= 5000) {
    console.log(e?.target?.files[0], "Called!!!");
    setImgFile(e?.target?.files[0]);
    imagHandler(e?.target?.files[0]);
    // const reader = new FileReader();
    // reader?.readAsDataURL(e?.target?.files[0]);

    console.log(URL.createObjectURL(e?.target?.files[0]), "aaaaaa");
    // } else {
    // setImgFile("");
    // imagHandler("");

    // Toast("error", "The file size must not exceed 5MB ");
    // }
  };
  useEffect(() => {
    console.log(imgFile.size / 1024, "Image Size !!!!");
  }, [imgFile]);
  return (
    <div style={{ padding: "1rem" }}>
      <div className="uploadTitle">
        <p>{heading}</p>
      </div>
      <label htmlFor={id} className="File_box">
        <p className="upload_title">{uploadTitle}</p>
        <Component style={{ fontSize: "3rem" }} />
        <input
          hidden
          accept={accept}
          multiple
          id={id}
          name={id}
          type="file"
          onChange={changeHandler}
        />
      </label>
    </div>
  );
}
