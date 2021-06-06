import { useState } from "react";
import ShareButtons from "./ShareButtons";

function Share(props) {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <fieldset className="share js-share">
      <div className="share__line">
        <legend className="share__title">
          <i className="fas fa-share-alt share--send"></i>COMPARTE
        </legend>
        <i className="fas fa-chevron-up share-up"></i>
      </div>

      <nav className="share__create-button js-containerShare">
        {/* js-containerShare es para el collapsable.Se va a ir al carajote */}
        <a
          href=""
          className="share__create-button-go "
          type="submit"
          value="CREAR TARJETA"
        >
          <i className="far fa-address-card"></i> CREAR TARJETA
        </a>
      </nav>
      {/* este mensaje de error se tiene que enganchar en el objeto data. Cambiar lo que hay ahora */}
      {props.errorMsg ? <p className="error">{props.errorMsg}</p> : null}

      {/* showButtons será true cuando envíe URL el fetch */}
      {props.showButtons && !props.errorMsg ? <ShareButtons /> : null}
    </fieldset>
  );
}

export default Share;
