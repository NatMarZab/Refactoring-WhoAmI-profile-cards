import React from "react";

const ResetBtn = (props) => {
    const handleReset = () => {
        props.handleReset();
    };

    return (
        <button className="maincontainer1__button js-btn-reset" type="reset" onClick={handleReset}>
        <i className="far fa-trash-alt"></i> Reset
        </button>
    );
}

export default ResetBtn;