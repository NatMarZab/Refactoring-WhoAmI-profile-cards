import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";

class PageTwo extends React.Component {
  constructor(props) {
    super(props);
  }

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
