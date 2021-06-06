import Design from "./Design.js";
import Fill from "./Fill";
import Share from "./Share.js";
// // Aquí importaríamos los Collapsables

function Form() {
  return (
    <form className="form js-form" action="#" id="resetform">
      <Design />
      <Fill />
      <Share showButtons />
    </form>
  );
}

export default Form;
