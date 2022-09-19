import React from "react";
import React_img from "../../../assets/images/helpimage.jpg";
import ellipse_img from "../../../assets/images/Ellipse 5.png";
import "./style.css";

const Donation = ({requestArray}) => {
  console.log(requestArray,"🚀🚀🚀");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #000",
        padding: "1rem 2rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={React_img}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "5px",
          }}
        />
        <div style={{ padding: "0 1rem" }}>
          <p className="donation_title">{requestArray && requestArray[9]}</p>
          <p className="donation_info">
            Donated from{" "}
            <img
              src={ellipse_img}
              alt="donation"
              style={{
                width: "50px",
                marginLeft: "10px",
                height: "50px",
              }}
            />
          </p>
        </div>
      </div>
      <div
        style={
          {
            //   display: "flex",
            //   justifyContent: "center",
            //   flexDirection: "column",
            //   alignContent: "flex-end",
          }
        }
      >
        <p
          style={{
            fontWeight: "500",
            fontSize: "36px",
            textAlign: "center",
            color: "#22232D",
          }}>
   
         {requestArray && parseInt(requestArray[0]?._hex, 16)}
        </p>
        <p className="donation_info">12 September 2022</p>
      </div>
    </div>
  );
};

export default Donation;
