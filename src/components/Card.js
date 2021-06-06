import React from "react";
import "../stylesheet/core/_variables.scss";
import "../stylesheet/layout/_maincontent1.scss";
import CardPreview from "./CardPreview";
import ResetBtn from "./ResetBtn";


function Card() {
    return(
      <section className="maincontainer1">
        <ResetBtn/>
        <CardPreview/>
      </section>
    )
}

export default Card;