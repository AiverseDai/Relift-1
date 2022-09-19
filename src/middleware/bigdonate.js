import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
import { BsImages } from "react-icons/bs";
import { useEffect } from "react";
import { ButtonGroup } from "react-bootstrap";
import donate from "./donate";

const BigDonate = ({ show, fullscreen, setShow, element }) => {
  console.log("BigDonate", element);

  const [input, setInput] = useState("");
  const handleSubmit = () => {
    donate(element[2], input);
    console.log(input, "input values");
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ minWidth: "800px!important" }}>
        <img src={element && element[7]} alt="pool" style={{ width: "100%" }} />
        <p className="poolName">{element[9]}</p>
        <p className="summary">{element[8]}</p>
        <p className="amount">{parseInt(element[0]?._hex, 16)}</p>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="amount to donate"
        />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <button type="button" onClick={handleSubmit}>
            Donate
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BigDonate;
