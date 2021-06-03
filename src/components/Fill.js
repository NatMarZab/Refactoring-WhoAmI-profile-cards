function Fill() {
  return (
    <fieldset className="details">
      <div className="details__line">
        <legend className="details__title">
          <i className="far fa-keyboard details__keyboard"></i> RELLENA
        </legend>
        <i className="fas fa-chevron-up details-up"></i>
      </div>

      <div className="details__form">
        <label className="details__fullName-form" for="fullName">
          Nombre completo *
        </label>
        <input
          className="details__fullName-fieldSpace"
          id="name"
          type="text"
          name="fullName"
          title="fullName"
          placeholder="Ej: Sally Hill"
        />
        <label className="details__workTitle-form" for="workTitle">
          Puesto *
        </label>
        <input
          className="details__workTitle-fieldSpace"
          id="work"
          type="text"
          name="workTitle"
          title="workTitle"
          placeholder="Ej: Front-end unicorn"
        />
        <label className="details__photo-form" for="photo">
          Imagen de perfil *
        </label>

        {/* <div className="action"> */}
        <label className="details__photo-button" for="img-selector">
          Añadir imagen
        </label>
        <input
          type="file"
          name="photo"
          id="img-selector"
          className="action__hiddenField js__profile-upload-btn"
        />

        {/* //HASTA AQUÍ FUNCIONA */}

        {/* <div
            className="profile__image js__profile-image details__photo-preview"
            style="
            background-image: url(https://www.w3schools.com/howto/img_avatar2.png);
          "
          ></div>
        </div>*/}

        {/* //A PARTIR DE AQUÍ FUNCIONA */}
        <label className="details__email-form" for="email">
          Email *
        </label>
        <input
          className="details__email-fieldSpace"
          type="text"
          name="email"
          id="email"
          title="email"
          placeholder="Ej: Sally-hill@gmail.com"
        />
        <label className="details__phone-form" for="phone">
          Teléfono
        </label>
        <input
          className="details__phone-fieldSpace"
          type="text"
          name="phone"
          id="phone"
          title="phone"
          placeholder="Ej: 555-55-55-55"
        />
        <label className="details__linkedin-form" for="linkedin">
          Linkedin *
        </label>
        <input
          className="details__linkedin-fieldSpace"
          id="linkedin"
          type="text"
          name="linkedin"
          title="linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
        />
        <label className="details__github-form" for="github">
          Github *
        </label>
        <input
          className="details__github-fieldSpace"
          id="github"
          type="text"
          title="github"
          name="github"
          placeholder="Ej: @sally-hill"
        />
      </div>
    </fieldset>
  );
}

export default Fill;
