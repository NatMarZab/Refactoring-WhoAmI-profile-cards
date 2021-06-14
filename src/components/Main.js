import React, { useState } from "react";
import Form from "./Form.js";
import Card from "./Card.js";

function Main() {
  const [palette, setPalette] = useState("1");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const updateAvatar = (image) => {
    setImage(image);
  };

  // const handleInputName = (value) => {
  //   setName(value);
  // };

  // const handleInputName = (ev) => {
  //   props.handleInputName(ev.currentTarget.value);
  // };

  // const handleInputJob = (ev) => {
  //   props.handleInputJob(ev.currentTarget.value);
  // };

  return (
    <>
      <main className="main">
        <Card image={image} name={name} />
        <Form
          palette={palette}
          onChangePalette={(evt) => setPalette(evt.target.value)}
          name={name}
          onChangeName={(ev) => setName(ev.currentTarget.value)}
          job={job}
          onChangeJob={(ev) => setJob(ev.currentTarget.value)}
          image={image}
          updateAvatar={updateAvatar}
          email={email}
          onChangeEmail={(ev) => setEmail(ev.currentTarget.value)}
          phone={phone}
          onChangePhone={(ev) => setPhone(ev.currentTarget.value)}
          linkedin={linkedin}
          onChangeLinkedin={(ev) => setLinkedin(ev.currentTarget.value)}
          github={github}
          onChangeGithub={(ev) => setGithub(ev.currentTarget.value)}
        />
      </main>
    </>
  );
}

export default Main;
