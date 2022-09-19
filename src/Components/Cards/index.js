import React from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import unVerify from "../../assets/images/unverify.png";
import verify from "../../assets/images/verify.png";
import "./style.css";
import donate from "../../middleware/donate";
import BigDonate from "../../middleware/bigdonate";
import { useState } from "react";

const Cards = ({ img, element }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  console.log(element, "this is element");
  const location = useLocation();
  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 9.27%, #000000 100%), 
url(${element && element[7]})`,
    backgroundSize: "cover",
    width: "100%",
    position: "relative",
    borderRadius: "10px",
    height: "500px",
  };
  return (
    <div>
      {/* <Card> */}
      <div>
        <div
          // src={Card_img}
          style={backgroundStyle}
        >
          {/* {location.pathname === "/" && (
            <div
              style={{
                position: "absolute",
                top: "0px",
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <img src={unVerify} alt="unverify" className="unVerifyImage" />
              <p
                className="unVerified"
                style={{
                  color: "#F20404",
                }}
              >
                Under Verification
              </p>
            </div>
          )} */}
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              color: "white",
              padding: "0 2rem",
            }}
          >
            {/* <div className="verifySection">
              <img src={verify} alt="verify" className="unVerifyImage" />
              <p
                className="unVerified"
                style={{
                  color: "#fff",
                }}
              >
                Under Verification
              </p>
            </div> */}
            <p className="title">{element && element[9]}</p>
          </div>
        </div>
        {/* </Card> */}
      </div>
      {/* {location.pathname === "/" && ( */}
      <div className="donateBtn_box">
        <button
          onClick={() => {
            setShow(true);
          }}
          type="button"
          className="donate_btn"
        >
          Donate
        </button>
      </div>
      {/* )} */}
      <BigDonate
        element={element}
        show={show}
        setShow={setShow}
        handleShow={handleShow}
      />
    </div>
  );
};

export default Cards;
