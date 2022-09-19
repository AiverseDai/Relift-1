import React from "react";
import "./style.css";

const SmallCards = ({ img, name, style, handleOpen }) => {
  const handleCard = (val) => {
    handleOpen(val);
  };
  return (
    <div className="small-cards" style={style} onClick={() => handleCard(name)}>
      <img src={img} alt={name} className="small-card" />
      <p className="small-card-title">{name}</p>
    </div>
  );
};

export default SmallCards;
