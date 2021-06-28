import { useState } from "react";
import ShareButtons from "./ShareButtons";

function Share({ onCreateCard, showButtons, errorMsg, wholeCard }) {
  return (
    <fieldset className="share js-share">
      <nav className="share__create-button">
        <a
          href=""
          className="share__create-button-go "
          type="submit"
          onClick={onCreateCard}
        >
          <i className="far fa-address-card"></i> CREAR TARJETA
        </a>
      </nav>
      {/* este mensaje de error se tiene que enganchar en el objeto data. Cambiar lo que hay ahora */}
      {errorMsg ? <p className="error">{errorMsg}</p> : null}

      {/* showButtons será true cuando envíe URL el fetch */}
      {showButtons && !errorMsg ? <ShareButtons wholeCard={wholeCard} /> : null}
    </fieldset>
  );
}

export default Share;
