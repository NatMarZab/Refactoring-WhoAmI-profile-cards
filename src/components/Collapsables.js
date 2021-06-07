import React, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
} from "react";
import Fill from "./Fill";
import Design from "./Design";
import Share from "./Share";
class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.eventCollapsable = this.eventCollapsable.bind(this);
  }
  eventCollapsable() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    //  const openFormContent = {
    // if(this.state.isOpen) {
    //     __classList.toggle("hidden");

    // }
    // else if(
    //     __classList.toggle()
    // )

    // }
    return (
      <>
        {/*header - ¿Dónde pongo el evento? ¿EN EL PRIMER DIV?*/}
        <div className="colors__line">
          <legend className="colors__title">
            <i
              className="far fa-object-ungroup boxy js-colorea"
              aria-hidden="true"
            ></i>
            {this.props.text}
          </legend>
          <i className="fas fa-chevron-up colors-up"></i>
        </div>
        {/*//contenido del form (lo he creado yo)*/}
        <div className="form__content">{this.props.children}</div>
      </>
    );
  }
}
export default Collapsable;
// // NO TOCAR hasta aprender ;)

// // function eventFill() {
// //     chooseC.classList.toggle("collapseShare");
// //     choosec2.classList.toggle("arrowShare");
// //   }

// //   function eventFill2() {
// //     detailsForm.classList.toggle("collapseShare");
// //     active.classList.toggle("arrowShare");
// //   }

// //   function eventFill3() {
// //     containerShare.classList.toggle("collapseShare");
// //     activeShare.classList.toggle("arrowShare");
// //   }

// //   choosec2.addEventListener("click", eventFill);
// //   active.addEventListener("click", eventFill2);
// //   activeShare.addEventListener("click", eventFill3);

// export default Collapsables.js
