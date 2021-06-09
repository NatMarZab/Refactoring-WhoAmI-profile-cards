import Design from "./Design.js";
import Fill from "./Fill";
import Share from "./Share.js";
import Collapsable from "./Collapsables";
// // Aquí importaríamos los Collapsables

function Form() {
  return (
    <form className="form js-form" action="#" id="resetform">
      <Collapsable>
        <Design />
      </Collapsable>
      <Collapsable>
        <Fill />
      </Collapsable>
      <Collapsable>
        <Share showButtons />
      </Collapsable>
    </form>
  );
}

export default Form;
