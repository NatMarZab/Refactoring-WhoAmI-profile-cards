function ShareButtons({ wholeCard }) {
  return (
    <section className="preview">
      <nav>
        <p className="preview__paragraph">
          La tarjeta ha sido creada:
          <a className="preview__url" href={wholeCard}>
            Aquí está el link
          </a>{" "}
          <a
            className="preview__button"
            href={`https://twitter.com/?lang=es=+ ${wholeCard}`}
          >
            <i className="fab fa-twitter preview__twitter"></i> Compartir en
            twitter
          </a>
        </p>
      </nav>
    </section>
  );
}

export default ShareButtons;
