function ShareButtons() {
  return (
    <section className="preview">
      <nav>
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
  );
}

export default ShareButtons;
