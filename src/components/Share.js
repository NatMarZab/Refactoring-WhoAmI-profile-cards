function Share() {
  return (
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
              <i className="fab fa-twitter preview__twitter"></i> Compartir en
              twitter
            </a>
          </p>
        </nav>
      </section>
    </fieldset>
  );
}

export default Share;
