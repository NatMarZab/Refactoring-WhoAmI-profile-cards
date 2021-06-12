import LOGO from "../images/LOGO.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <main className="main-section">
        <section className="section-header">
          <img className="main-logo" src={LOGO} alt="logo" />
        </section>
        <section className="main-section-1">
          {/* "main-section-1" no tiene ningún estilo */}
          <h1 className="title">Crea tu tarjeta de visita</h1>
          <p className="subtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>
        <section className="main-section-2">
          <div className="icon icon-text-1">
            {/* "icon e icon-text-1" no tienen ningún estilo */}
            <i className="far fa-object-ungroup i-main"></i>
            <p className="i-text design">diseña</p>
          </div>
          <div className="icon icon-text-2">
            {/* "icon e icon-text-2" no tienen ningún estilo */}
            <i className="far fa-keyboard i-main"></i>
            <p className="i-text fill">rellena</p>
          </div>
          <div className="icon icon-text-3">
            {/* "icon e icon-text-3" no tienen ningún estilo */}
            <i className="fas fa-share-alt i-main"></i>
            <p className="i-text">comparte</p>
          </div>
        </section>
        <div className="boton">
          <Link to="/pagetwo" className="boton-link-main" title="start">
            comenzar
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
