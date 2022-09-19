import React, { useState } from "react";
import PageView from "../common/PageView";
import { disasterList } from "../../utils/data.js/data";
import SmallCards from "../Cards/SmallCards";
import "./style.css";
import RequestFundForm from "../forms/RequestFundForm";
import SubmitDoc from "../SubmitDoc/Upload";

const DisasterPage = () => {
  const [submit, setSubmit] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const handleOpen = (name) => {
    setSubmit(true);
  };
  const handleSubmit = (val) => {
    // setSubmitForm(true);
    console.log(val, "valiues in form");
  };
  return (
    <div>
      {/* <PageView /> */}
      <div style={{ padding: "2rem 1rem 4rem 1rem", textAlign: "center" }}>
        <p className="disaster_title">Start your fundraiser</p>
        <p className="disaster_desc">Fill below form to request fund</p>
        <div className="disaster_box">
          {!submitForm && !submit ? (
            <div className="disasters">
              {disasterList.map((list) => (
                <SmallCards
                  name={list?.name}
                  img={list?.img}
                  handleOpen={handleOpen}
                  style={{ margin: " 2rem" }}
                />
              ))}
            </div>
          ) : (
            <RequestFundForm
              submitForm={submitForm}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisasterPage;
