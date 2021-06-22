import React from "react";
import Fill from "./Fill";
import Design from "./Design";
import Share from "./Share";
class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleCollapsable = this.handleCollapsable.bind(this);
  }
  handleCollapsable() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    //  const openFormContent = {
    // this.setState.isOpen ({

    const openClassName = this.state.isOpen ? "open" : "";
    {
      /*const arrowUpDown = this.state.isOpen ? */
    }
    return (
      <div className="opencolapsable">
        <div className="colors__line" onClick={this.handleCollapsable}>
          <legend className="colors__title">
            <i
              className={this.props.icon}
              aria-hidden="true"
            ></i>
            {this.props.text}
          </legend>
          <i className={`fas fa-chevron-down colors-up ${openClassName}`}></i>
        </div>
        <div className="form__content">
          {this.state.isOpen ? this.props.children : ""}
        </div>
      </div>
    );
  }
}
export default Collapsable;
