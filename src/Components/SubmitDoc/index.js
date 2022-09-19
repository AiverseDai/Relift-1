import React from "react";
import Upload from "./Upload";
import { RiImageAddLine } from "react-icons/ri";
import { GoFileSymlinkFile } from "react-icons/go";
import "./style.css";

const SubmitDoc = ({ imagHandler, resetImage, imageData }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "4rem 6rem",
          alignItems: "center",
        }}
      >
        <Upload
          imagHandler={imagHandler}
          resetImage={resetImage}
          Component={RiImageAddLine}
          uploadTitle="Add Images"
          heading="Add relevant images"
          id="image"
          accept={"image/*"}
        />
        <Upload
          id="doc"
          // accept={}
          accept={".pdf,.doc"}
          imagHandler={imagHandler}
          resetImage={resetImage}
          Component={GoFileSymlinkFile}
          uploadTitle="Add Documents"
          heading="Add your documents"
        />
        {/* <Upload imagHandler={imagHandler} resetImage={resetImage} /> */}
        <div style={{ width: "100%", padding: "0 2rem" }}>
          <p style={{ textAlign: "left", margin: "0" }}>
            Note: Only add pdf files
          </p>
          {/* <br /> */}
          <div style={{ display: "flex" }}>
            <div>List of document -</div>
            <div style={{ textAlign: "left" }}>
              1. ID Proof
              <br />
              2. Money Estimate
              <br />
              3. Declaration Letter
            </div>
          </div>
        </div>
        <div className="doc_btn_wrapper">
          <button type="button" className="doc_btn">
            CREATE REQUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitDoc;
