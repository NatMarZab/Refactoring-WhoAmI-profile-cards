import Design from "./Design.js";
import Fill from "./Fill";
import Share from "./Share.js";
import Collapsable from "./Collapsables";
// // Aquí importaríamos los Collapsables

function Form() {
  return (
    <form className="form js-form" action="#" id="resetform">
      <Collapsable icon={`far fa-object-ungroup boxy js-colorea`}>
        <Design />
      </Collapsable>
      <Collapsable icon={`far fa-keyboard boxy js-colorea`}>
        <Fill image={props.image} updateAvatar={props.updateAvatar} />
      </Collapsable>
      <Collapsable icon={`far fa-address-card boxy js-colorea`}>
        <Share showButtons />
      </Collapsable>
    </form>
  );
}

export default Form;
