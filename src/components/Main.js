import React, { useState } from "react";
import Form from "./Form.js";
import Card from "./Card";

function Main() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");

  const updateAvatar = (image) => {
    setImage(image);
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
