import React from "react";
import { icons, linkImages } from "../../utils/data.js/data";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        {/* 1st section */}
        <div className="footer-title">
          <p>Disaster Management</p>
          <div className="footer-line" />
          <p className="footer-text">Help for hope.</p>
        </div>
        {/* 2nd section */}
        <div>
          <p className="footer-query">For Any Queries</p>
          {/* <div className="footer-text-wrapper"> */}
          <p className="footer-text" style={{ textAlign: "left" }}>
            Email : infosample@gmail.com
          </p>
          <p
            className="footer-text"
            style={{ padding: "0", textAlign: "left" }}
          >
            Contact : +91 8888 8888 90
          </p>
          {/* </div> */}
        </div>
        {/* 3rd section */}
        <div style={{ textAlign: "center" }}>
          <p className="footer-query">Follow Us On</p>
          <div className="iconSection">
            {icons.map((icon) => (
              <div key={icon.id} className="footer-icon">
                <img src={icon.icon} alt={icons.name} />
              </div>
            ))}
          </div>
          <div className="footer-images">
            {linkImages.map((linkImg) => (
              <div className="linkImagesSection">
                <img
                  src={linkImg.img}
                  alt={linkImg.name}
                  className="link-images"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
