import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Bell from "../../assets/images/bell.png";
import Icon from "../../assets/images/icon.png";
import { AiOutlineBell, AiFillBell } from "react-icons/ai";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import connect from "../../middleware/connect";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="heading">
        <p onClick={() => navigate("/")}>Disaster Management</p>
      </div>
      <div className="nav">
        <NavLink onClick={connect} className="btn" id="show" to="#" activeClassName="selected">
          Connect wallet
        </NavLink>
        <NavLink className="btn" to="/poolPage" activeClassName="selected">
          Donate Fund
        </NavLink>
        <NavLink className="btn" to="/request_fund" activeclassname="active">
          Request Fund
        </NavLink>
        <NavLink className="btn" to="/profile" activeClassName="selected">
          My Profile
        </NavLink>
      </div>
      <div>
        {toggle ? (
          <AiOutlineBell
            className="bell_icon"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiFillBell
            className="bell_icon"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      <div>
        <img src={Icon} alt="bell" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
