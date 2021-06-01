import "../stylesheet/App.scss";
import React from "react";
//import React, { Component } from "react";

class App extends React.Component {
  //constructor(props) {
  //duda: ¿hay que dejarlo definido? ¿Lo vamos a usar inmediatamente? ¿Se puede quitar?
  //super(props);
  //}

  render() {
    //Aquí se declaran las constantes(escribimos el valor entre paréntesis)
    return (
      <>
        <header className="header-container2">
          <img className="main-logo2" src="../images/LOGO2.png" />
        </header>
        <main className="main">
          <section className="maincontainer1">
            <button
              className="maincontainer1__button js-btn-reset"
              type="reset"
            >
              <i className="far fa-trash-alt"></i> Reset
            </button>
            <div className="maincontainer1__profilecard">
              <div className="maincontainer1__text js-headerpreview">
                <h2 className="maincontainer1__title js-name">
                  Nombre apellido
                </h2>
                <h3 className="maincontainer1__subtitle js-job">
                  Front-end developer
                </h3>
              </div>
              <div className="maincontainer1__img js__profile-preview js__border-palette"></div>
              <nav className="maincontainer1__links-container js-footerpreview">
                <a
                  href=""
                  className="maincontainer1__links js-telefono js__link__radius"
                >
                  <i className="fas fa-mobile-alt js__link__pallete"></i>
                </a>
                <a
                  href=""
                  className="maincontainer1__links js-mail js__link__radius"
                >
                  <i className="far fa-envelope js__link__pallete"></i>
                </a>
                <a
                  href=""
                  className="maincontainer1__links js-linkedin js__link__radius"
                >
                  <i className="fab fa-linkedin-in js__link__pallete"></i>
                </a>
                <a
                  href=""
                  className="maincontainer1__links js-git js__link__radius"
                >
                  <i className="fab fa-github-alt js__link__pallete"></i>
                </a>
              </nav>
            </div>
          </section>
          <form className="form js-form" action="#" id="resetform">
            <fieldset className="colors">
              <div className="colors__line">
                <legend className="colors__title">
                  <i
                    className="far fa-object-ungroup boxy js-colorea"
                    aria-hidden="true"
                  ></i>
                  DISEÑA
                </legend>
                <i className="fas fa-chevron-up colors-up"></i>
              </div>

              <div className="colors_design">
                <h3 className="colorstitle">Colores</h3>
                <div className="palette">
                  <ul className="opt1color">
                    <label for="palets">
                      <input
                        type="radio"
                        value="1"
                        className="choosecolor js-CHeckColor1"
                        id="palets"
                        name="palette"
                      />
                    </label>
                    <li className="opt1-1"></li>
                    <li className="opt1-2"></li>
                    <li className="opt1-3"></li>
                  </ul>
                  <ul className="opt2color">
                    <label for="palets1">
                      <input
                        type="radio"
                        value="2"
                        className="choosecolor js-CHeckColor2"
                        id="palets1"
                        name="palette"
                      />
                    </label>
                    <li className="opt2-1"></li>
                    <li className="opt2-2"></li>
                    <li className="opt2-3"></li>
                  </ul>
                  <ul className="opt3color">
                    <label for="palets2">
                      <input
                        type="radio"
                        value="3"
                        className="choosecolor js-CHeckColor3"
                        id="palets2"
                        name="palette"
                      />
                    </label>
                    <li className="opt3-1"></li>
                    <li className="opt3-2"></li>
                    <li className="opt3-3"></li>
                  </ul>
                </div>
              </div>
            </fieldset>
            <fieldset className="details">
              <div className="details__line">
                <legend className="details__title">
                  <i className="far fa-keyboard details__keyboard"></i> RELLENA
                </legend>
                <i className="fas fa-chevron-up details-up"></i>
              </div>
              <div className="details__form">
                <label className="details__fullName-form" for="fullName">
                  Nombre completo *
                </label>
                <input
                  className="details__fullName-fieldSpace"
                  id="name"
                  type="text"
                  name="fullName"
                  title="fullName"
                  placeholder="Ej: Sally Hill"
                />
                <label className="details__workTitle-form" for="workTitle">
                  Puesto *
                </label>
                <input
                  className="details__workTitle-fieldSpace"
                  id="work"
                  type="text"
                  name="workTitle"
                  title="workTitle"
                  placeholder="Ej: Front-end unicorn"
                />
                <label className="details__photo-form" for="photo">
                  Imagen de perfil *
                </label>
                <div className="action">
                  <label className="details__photo-button" for="img-selector">
                    Añadir imagen
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="img-selector"
                    className="action__hiddenField js__profile-upload-btn"
                  />
                  <div
                    className="profile__image js__profile-image details__photo-preview"
                    style="
                  background-image: url(https://www.w3schools.com/howto/img_avatar2.png);
                "
                  ></div>
                </div>
                <label className="details__email-form" for="email">
                  Email *
                </label>
                <input
                  className="details__email-fieldSpace"
                  type="text"
                  name="email"
                  id="email"
                  title="email"
                  placeholder="Ej: Sally-hill@gmail.com"
                />
                <label className="details__phone-form" for="phone">
                  Teléfono
                </label>
                <input
                  className="details__phone-fieldSpace"
                  type="text"
                  name="phone"
                  id="phone"
                  title="phone"
                  placeholder="Ej: 555-55-55-55"
                />
                <label className="details__linkedin-form" for="linkedin">
                  Linkedin *
                </label>
                <input
                  className="details__linkedin-fieldSpace"
                  id="linkedin"
                  type="text"
                  name="linkedin"
                  title="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                />
                <label className="details__github-form" for="github">
                  Github *
                </label>
                <input
                  className="details__github-fieldSpace"
                  id="github"
                  type="text"
                  title="github"
                  name="github"
                  placeholder="Ej: @sally-hill"
                />
              </div>
            </fieldset>

            <fieldset className="share js-share">
              <div className="share__line">
                <legend className="share__title">
                  <i className="fas fa-share-alt share--send"></i> COMPARTE
                </legend>
                <i className="fas fa-chevron-up share-up"></i>
              </div>
              <nav className="share__create-button js-containerShare">
                <a
                  href=""
                  className="share__create-button-go js_share_card_button"
                  type="submit"
                  value="CREAR TARJETA"
                >
                  <i className="far fa-address-card"></i> CREAR TARJETA
                </a>
              </nav>
              <p className="error js-error"></p>
              <section className="preview">
                {/* <!--ojo al posible cambio parde fieldset share y cerrar form mas abajo-->*/}
                <nav className="preview__card js_preview_card">
                  <p className="preview__paragraph">
                    La tarjeta ha sido creada:
                    <a className="preview__url" href="#"></a>{" "}
                    <a className="preview__button" href="">
                      <i className="fab fa-twitter preview__twitter"></i>{" "}
                      Compartir en twitter
                    </a>
                  </p>
                </nav>
              </section>
            </fieldset>
            {/*<!-- <button className="maincontainer1__button" type="reset">
          <i className="far fa-trash-alt"></i> Reset
    </button> -->*/}
          </form>
        </main>
        <footer className="footer">
          <small className="copy "> Awesome profile cards @ 2021 </small>
          <img
            className="logo-adalab"
            src="../images/logo-adalab.png"
            alt="logo logo-adalab"
          />
        </footer>
      </>
    );
    // Esto es lo que va a pintar
  }
}

export default App;
