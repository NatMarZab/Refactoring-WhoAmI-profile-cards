import Design from "./Design.js";
import Fill from "./Fill.js";
import Share from "./Share.js";
import Collapsable from "./Collapsables";
// // Aquí importaríamos los Collapsables

function Form({
  palette,
  onChangePalette,
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
  onCreateCard,
  showButtons,
  errorMsg,
  wholeCard,
}) {
  return (
    <form className="form js-form" action="#" id="resetform">
      <Collapsable
        icon={`far fa-object-ungroup boxy js-colorea`}
        text={" DISEÑA"}
      >
        <Design palette={palette} onChangePalette={onChangePalette} />
      </Collapsable>
      <Collapsable icon={`far fa-keyboard boxy js-colorea`} text={" RELLENA"}>
        <Fill
          name={name}
          onChangeName={onChangeName}
          job={job}
          onChangeJob={onChangeJob}
          image={image}
          updateAvatar={updateAvatar}
          email={email}
          onChangeEmail={onChangeEmail}
          phone={phone}
          onChangePhone={onChangePhone}
          linkedin={linkedin}
          onChangeLinkedin={onChangeLinkedin}
          github={github}
          onChangeGithub={onChangeGithub}
          // name={props.name}
          // job={props.job}
          // image={props.image}
          // updateAvatar={props.updateAvatar}
        />
      </Collapsable>
      <Collapsable
        icon={`far fa-address-card boxy js-colorea`}
        text={" COMPARTE"}
      >
        <Share
          errorMsg={errorMsg}
          onCreateCard={onCreateCard}
          showButtons={showButtons}
          /* errorMsg={errorMsg}*/
          wholeCard={wholeCard}
        />
      </Collapsable>
    </form>
  );
}

export default Form;
