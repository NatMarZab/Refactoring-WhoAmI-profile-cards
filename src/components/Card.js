import React from "react";
import ResetBtn from "./ResetBtn";
import CardPreview from "./CardPreview";

function Card(props) {
  return (
    <section className="maincontainer1">
      <ResetBtn />
      <CardPreview name={props.name} />
    </section>
  );
}

export default Card;
