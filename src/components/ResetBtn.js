import React from "react";
// import "../stylesheet/core/_variables.scss";
// import "../stylesheet/layout/_maincontent1.scss";

function ResetBtn(props) {
    return (
        <button className="maincontainer1__button js-btn-reset" type="reset">
        <i className="far fa-trash-alt"></i> Reset
        </button>
    );
}

export default ResetBtn;