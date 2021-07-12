import React from "react";
import logo from "../../assets/images/logo_crewmeister.svg";

const Loading = () => {
  return (
    <div className="overlay">
      <div>
        <div>
          <img src={logo} className="waitLogo" alt="" />
          <h1 className="">Crewmeister</h1>
        </div>

        <div className="wait">please wait . . .</div>
      </div>
    </div>
  );
};

export default Loading;
