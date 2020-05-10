import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Navbar />
      <div className="main">
      </div>
    </div>
  );
};

export default App;
