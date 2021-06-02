import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
// Aquí importaríamos los Collapsables

function Form() {
  return (
    <form className="form js-form" action="#" id="resetform">
      <Design />
      <Fill />
      <Share />
    </form>
  );
}

export default Form;
