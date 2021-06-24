import Input from "./Input";
import GetAvatar from "./GetAvatar";
import defaultAvatar from "../images/defaultAvatar.png";
//import image from "../images/defaultAvatar.png";

function Fill({
  name,
  onChangeName,
  job,
  onChangeJob,
  image,
  updateAvatar,
  email,
  onChangeEmail,
  phone,
  onChangePhone,
  linkedin,
  onChangeLinkedin,
  github,
  onChangeGithub,
}) {
  return (
    <fieldset className="details">
      <div className="details__form">
        <Input
          text="Nombre completo *"
          id="name"
          name="fullName"
          title="fullName"
          placeholder="Ej: Sally Hill"
          value={name}
          onChange={onChangeName}
        />
        <Input
          text="Puesto *"
          id="work"
          name="workTitle"
          title="workTitle"
          placeholder="Ej: Front-end unicorn"
          value={job}
          onChange={onChangeJob}
        />

        <label className="details__label" htmlFor="photo">
          Imagen de perfil *
        </label>

        <GetAvatar avatar={image} updateAvatar={updateAvatar} />
        {/*<div
          class="profile__image js__profile-image details__photo-preview"
          // style="
          //   background-image: url(https://www.w3schools.com/howto/img_avatar2.png);
          // "
        >
          <input
            type="file"
            name="image"
            id="img-selector"
            className="action__hiddenField js__profile-upload-btn"
            required
          />
        
        </div>*/}


        <Input
          text="Email *"
          id="email"
          name="email"
          title="email"
          placeholder="Ej: Sally-hill@gmail.com"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          text="Teléfono"
          id="phone"
          name="phone"
          title="phone"
          placeholder="Ej: 555-55-55-55"
          value={phone}
          onChange={onChangePhone}
        />
        <Input
          text="LinkedIn *"
          id="linkedin"
          name="linkedin"
          title="linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          value={linkedin}
          onChange={onChangeLinkedin}
        />
        <Input
          text="Github *"
          id="github"
          name="github"
          title="github"
          placeholder="Ej: @sally-hill"
          value={github}
          onChange={onChangeGithub}
        />
      </div>
    </fieldset>
  );
}

export default Fill;
