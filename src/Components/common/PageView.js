import React from "react";
import "./style.css";
import { FiChevronRight } from "react-icons/fi";

const PageView = () => {
  return (
    <div className="pageView">
      <p className="page-text">
        Home <FiChevronRight /> Request Fund <FiChevronRight /> Form fill up
        <FiChevronRight />
        Submit Document
      </p>
    </div>
  );
};

export default PageView;
