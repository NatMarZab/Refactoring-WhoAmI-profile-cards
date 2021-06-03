import React from "react";
import "../stylesheet/layout/_footer.scss";
import "../stylesheet/core/_variables.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="copy "> Awesome profile cards @ 2021 </small>
      <img
        className="logo-adalab"
        src="../images/logo-adalab.png"
        alt="logo logo-adalab"
      />
    </footer>
  );
};
export default Footer;
