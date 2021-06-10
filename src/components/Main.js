import React, { useState } from "react";
import Form from "./Form.js";
import Card from "./Card.js";

function Main() {
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

  const handleInputName = (value) => {
    setName(value);
  };

  return (
    <>
      <main className="main">
        <Card image={image} />
        <Form image={image} updateAvatar={updateAvatar} />
      </main>
    </>
  );
}

export default Main;
