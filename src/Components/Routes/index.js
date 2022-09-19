import React from "react";
import { Route, Routes } from "react-router-dom";
import DisasterPage from "../DisasterPage";
import Home from "../Home";
import PoolPage from "../PoolPage";
import Profile from "../Profile";

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/request_fund" element={<DisasterPage />} />
      <Route exact path="/request_fund/:name" element={<DisasterPage />} />
      <Route
        exact
        path="/request_fund/:name/:fname"
        element={<DisasterPage />}
      />
      <Route exact path="/poolPage" element={<PoolPage />} />
    </Routes>
  );
};

export default index;
