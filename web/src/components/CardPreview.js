import React from "react";
import Profile from "./Profile";
import image from "../images/defaultAvatar.png";

function CardPreview(props) {
  return (
    <>
      <div className="maincontainer1__profilecard">
        <div
          className={`maincontainer1__text js-headerpreview border-preview${props.palette}`}
        >
          <h2
            className={`maincontainer1__title js-name h1-color${props.palette}`}
          >
            {props.name || "Nombre apellido"}
          </h2>
          <h3 className="maincontainer1__subtitle js-job">
            {props.job || "Front-end developer"}
          </h3>
        </div>
        <div
          className="maincontainer1__img js__profile-preview js__border-palette"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <nav className="maincontainer1__links-container js-footerpreview">
          <a
            href={`tel:${props.phone}`}
            className={`maincontainer1__links js-telefono js__link__radius links${props.palette}_1`}
          >
            <i
              className={`fas fa-mobile-alt js__link__pallete links${props.palette}`}
            ></i>
          </a>
          <a
            href={`mailto:${props.email}`}
            className={`maincontainer1__links js-mail js__link__radius links${props.palette}_1`}
          >
            <i
              className={`far fa-envelope js__link__pallete links${props.palette}`}
            ></i>
          </a>
          <a
            href={`https://www.linkedin.com/in/${props.linkedin}`}
            className={`maincontainer1__links js-linkedin js__link__radius links${props.palette}_1`}
          >
            <i
              className={`fab fa-linkedin-in js__link__pallete links${props.palette}`}
            ></i>
          </a>
          <a
            href={`https://github.com/${props.github}`}
            className={`maincontainer1__links js-git js__link__radius links${props.palette}_1`}
          >
            <i
              className={`fab fa-github-alt js__link__pallete links${props.palette}`}
            ></i>
          </a>
        </nav>
      </div>
    </>
  );
}

export default CardPreview;
