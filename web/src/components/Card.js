import React from "react";
import ResetBtn from "./ResetBtn";
import CardPreview from "./CardPreview";

function Card(props) {
  return (
    <section className="maincontainer1">
      <ResetBtn handleReset={props.handleReset} />
      <CardPreview
        name={props.name}
        palette={props.palette}
        job={props.job}
        image={props.image}
        email={props.email}
        phone={props.phone}
        linkedin={props.linkedin}
        github={props.github}
      />
    </section>
  );
}

export default Card;
