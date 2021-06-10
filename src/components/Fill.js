import Collapsable from "./Collapsables";
import Input from "./Input";
import GetAvatar from "./GetAvatar";
import image from "../images/defaultAvatar.png";

function Fill(props) {
  const handleInputName = (ev) => {
    props.handleInputName(ev.currentTarget.value);
  };

  const handleInputJob = (ev) => {
    props.handleInputJob(ev.currentTarget.value);
  };

  return (
    <fieldset className="details">
      <div className="details__form">
        <Input
          text="Nombre completo *"
          id="name"
          name="fullName"
          title="fullName"
          placeholder="Ej: Sally Hill"
          value={props.name}
          onChange={handleInputName}
        />
        <Input
          text="Puesto *"
          id="work"
          name="workTitle"
          title="workTitle"
          placeholder="Ej: Front-end unicorn"
          value={props.job}
          onChange={handleInputJob}
        />

        <label className="details__label" htmlFor="photo">
          Imagen de perfil *
        </label>

        <GetAvatar image={props.image} updateAvatar={props.updateAvatar} />

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
