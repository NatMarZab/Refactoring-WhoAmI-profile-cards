import React from "react";
import ResetBtn from "./ResetBtn";
import CardPreview from "./CardPreview";

function Card(props) {
  return (
    <section className="maincontainer1">
      <ResetBtn />
      <CardPreview name={props.name} 
      job={props.job} 
      image={props.image}
      email={props.email} 
      phone={props.phone}
      linkedin={props.linkedin}
      github={props.github}/>
    </section>
  );
}

export default Card;
