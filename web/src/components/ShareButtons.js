function ShareButtons({ wholeCard }) {
  return (
    <section className="preview">
      <nav>
        <p className="preview__paragraph">
          La tarjeta ha sido creada:
          <a className="preview__url" href={wholeCard} target="_blank" >
            Aquí está el link
          </a>{" "}
          <a
            className="preview__button"
            href={`https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=Conoce%20mi%20tarjeta%20de%20presentación:%20${wholeCard}&hashtags=openToWork,frontend`}
           // href={`https://twitter.com/intent/tweet?text= + ${wholeCard}`}
            target="_blank"
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
