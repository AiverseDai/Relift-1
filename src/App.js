import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./components/Routes";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
};

export default App;
