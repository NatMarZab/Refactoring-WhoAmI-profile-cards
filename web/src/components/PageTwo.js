import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class PageTwo extends React.Component {
  render() {
    //Aquí se declaran las constantes(escribimos el valor entre paréntesis)
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
    // Esto es lo que va a pintar
  }
}

export default PageTwo;
