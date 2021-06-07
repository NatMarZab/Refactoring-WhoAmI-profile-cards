import React from "react";
import "../stylesheet/core/_variables.scss";
import "../stylesheet/layout/_maincontent1.scss";
import SocialMedia from "./SocialMedia";

function CardPreview() {
  return (
        <div className="maincontainer1__profilecard">
          <div className="maincontainer1__text js-headerpreview">
            {/* {props.name || "Nombre apellido"} */}
            <h2 className="maincontainer1__title js-name">Nombre apellido</h2>
            {/* {props.job || "Front-end developer"} */}
            <h3 className="maincontainer1__subtitle js-job">Front-end developer</h3>
          </div>
          <div className="maincontainer1__img js__profile-preview js__border-palette"></div>
          
        </div>
  );
}

export default CardPreview;
