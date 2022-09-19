import React, { useState } from "react";
import "./style.css";
import { FaRegUserCircle } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineDropbox,
  AiOutlineDollar,
  AiFillDropboxCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import SubmitDoc from "../SubmitDoc/index";
import { BsImages } from "react-icons/bs";
import store from "../../middleware/store";
const RequestFundForm = ({ handleSubmit, submitForm }) => {
  const [resetImage, setResetImage] = React.useState(false);
  const [imageData, setImageData] = React.useState();
  const [input, setInput] = useState({});

  const imagHandler = (img) => {
    setImageData(img);
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    // handleSubmit(input);
    //amount,imageLink,videoLink,name,phone,summary,poolName
    console.log(input,"⚡⚡⚡");
    if(input?.size && input?.image && input?.name && input?.address && input?.poolName){
      await store(input?.size,input?.image,"video link",input?.name,"phone",input?.address,input?.poolName);
      alert(
        "form is submited"
      );
      return ;
    }
    alert("all field are required")
    console.log(input, "values");
  };
  return (
    <div>
      {!submitForm ? (
        <form className="form">
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="fund_input"
            />
            <FaRegUserCircle style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="poolName"
              onChange={handleChange}
              placeholder="Pool Name"
              className="fund_input"
            />
            <AiOutlineDropbox style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="size"
              onChange={handleChange}
              placeholder="Request Amount"
              className="fund_input"
            />
            <AiOutlineDollar style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Address"
              className="fund_input"
            />
            <GoLocation style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="image"
              onChange={handleChange}
              placeholder="Image Link"
              className="fund_input"
            />
            <BsImages style={{ fontSize: "2rem" }} />
          </div>

          <div className="fund_textare_wrapper">
            <textarea
              className="fund_textarea"
              maxLength="5000"
              onChange={handleChange}
              placeholder="Describe in detail about your purpose"
              rows={5}
              style={{ width: "100%" }}
            />
          </div>
          <p style={{ textAlign: "right", fontSize: "12px" }}>0/5000</p>
          <div>
            <button className="fund_btn" onClick={submitHandler}>
              Next
            </button>
          </div>
        </form>
      ) : (
        <SubmitDoc
          imagHandler={imagHandler}
          resetImage={resetImage}
          imageData={imageData}
        />
      )}
    </div>
  );
};

export default RequestFundForm;
