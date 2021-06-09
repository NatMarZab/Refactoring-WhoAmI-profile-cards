import Collapsable from "./Collapsables";
import Input from "./Input";
import GetAvatar from "./GetAvatar";
import image from "../images/defaultAvatar.png";

function Fill() {
  return (
    <fieldset className="details">
      {/* <div className="details__line">
        <legend className="details__title">
          <i className="far fa-keyboard details__keyboard"></i> RELLENA
        </legend>
        <i className="fas fa-chevron-up details-up"></i>
      </div> */}
      {/* <Collapsable text={"RELLENA"} /> */}

      <div className="details__form">
        <Input
          text="Nombre completo *"
          id="name"
          name="fullName"
          title="fullName"
          placeholder="Ej: Sally Hill"
        />
        <Input
          text="Puesto *"
          id="work"
          name="workTitle"
          title="workTitle"
          placeholder="Ej: Front-end unicorn"
        />

        <label className="details__label" htmlFor="photo">
          Imagen de perfil *
        </label>

        <GetAvatar image={props.image} updateAvatar={props.updateAvatar} />

        {/* <div className="action">
          <label className="details__photo-button" htmlFor="img-selector">
            Añadir imagen
          </label>
          <input
            type="file"
            name="photo"
            id="img-selector"
            className="action__hiddenField js__profile-upload-btn"
          />

          <div
            className="profile__image js__profile-image details__photo-preview"
            style={{ backgroundImage: "" }}
          ></div>
        </div> */}

        <Input
          text="Email *"
          id="email"
          name="email"
          title="email"
          placeholder="Ej: Sally-hill@gmail.com"
        />
        <Input
          text="Teléfono"
          id="phone"
          name="phone"
          title="phone"
          placeholder="Ej: 555-55-55-55"
        />
        <Input
          text="LinkedIn *"
          id="linkedin"
          name="linkedin"
          title="linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
        />
        <Input
          text="Github *"
          id="github"
          name="github"
          title="github"
          placeholder="Ej: @sally-hill"
        />
      </div>
    </fieldset>
  );
}

export default Fill;
