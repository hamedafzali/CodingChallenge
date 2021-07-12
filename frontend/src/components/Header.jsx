import React from "react";
import logo from "../assets/images/logo_crewmeister_white.svg";
const Header = () => {
  return (
    <nav className="navbar fixed-top">
      <img src={logo} className="logo" alt="" />

      <a className="navLogin" href="/">
        Login
      </a>
    </nav>
  );
};

export default Header;
