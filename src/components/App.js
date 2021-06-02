import React from "react";
import "../stylesheet/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
        <Header />
        <Main />
        <Footer />
      </>
    );
    // Esto es lo que va a pintar
  }
}

export default App;
