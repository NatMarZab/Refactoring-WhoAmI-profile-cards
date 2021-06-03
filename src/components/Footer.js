// import React from "react";
import LogoFooter from "../images/logo-adalab.png";
import "../stylesheet/App.scss";

function Footer() {
  return (
    <footer className="footer">
      <small className="copy "> Awesome profile cards @ 2021 </small>
      <img className="logo-adalab" src={LogoFooter} alt="logo logo-adalab" />
    </footer>
  );
}

export default Footer;
