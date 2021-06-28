import React, { useState, useEffect } from "react";
import Form from "./Form.js";
import Card from "./Card.js";
import defaultAvatar from "../images/defaultAvatar.png";

import ls from "../services/localStorage";
import apiData from "../services/api";
import ShareButtons from "./ShareButtons.js";

function Main() {
  const [palette, setPalette] = useState(ls.get("palette", "1"));
  const [name, setName] = useState(ls.get("name", ""));
  const [job, setJob] = useState(ls.get("job", ""));
  const [image, setImage] = useState(ls.get("image", defaultAvatar));
  const [email, setEmail] = useState(ls.get("email", ""));
  const [phone, setPhone] = useState(ls.get("phone", ""));
  const [linkedin, setLinkedin] = useState(ls.get("linkedin", ""));
  const [github, setGithub] = useState(ls.get("github", ""));
  const [showButtons, setShowButtons] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [wholeCard, setWholeCard] = useState("");
  const updateAvatar = (image) => {
    setImage(image);
  };
  const data = {
    palette,
    name,
    job,
    photo: image,
    email,
    phone,
    linkedin,
    github,
  };

  {
    /* useEffect(() => {
    if (palette || name || job || image || email || phone || github === "") {
      apiData().then((data) => {
        setPalette(
          data.palette
        ); /*¿El valor se asignaría así? ¿Para qué entnces los desplegamos uno a uno en api.js?*/
    /*2ª opción: setPalette(palette) 
        setName(data.name);
        setJob(data.job);
        setImage(data.image);
        setEmail(data.email);
        setPhone(data.phone);
        setLinkedin(data.linkedin);
        setGithub(data.github);
      });
    }
  }, []); */
  }
  useEffect(() => {
    ls.set("palette", palette);
    ls.set("name", name);
    ls.set("job", job);
    ls.set("image", image);
    ls.set("email", email);
    ls.set("phone", phone);
    ls.set("linkedin", linkedin);
    ls.set("github", github);
  }, [name, job, image, palette, email, phone, linkedin, github]);

  const handleReset = () => {
    setPalette("1");
    setName("");
    setJob("");
    setImage(defaultAvatar);
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
    ls.clear();
    location.reload();
  }

  /* function handleCreateCard(ev) {
    ev.preventDefault();
  }*/

  // function Main() {
  //   const [palette, setPalette] = useState("1");
  //   const [name, setName] = useState("");
  //   const [job, setJob] = useState("");
  //   const [image, setImage] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [linkedin, setLinkedin] = useState("");
  //   const [github, setGithub] = useState("");

  //   const updateAvatar = (image) => {
  //     setImage(image);
  //   };

  return (
    <>
      <main className="main">
        <Card
          name={name}
          job={job}
          image={image}
          updateAvatar={updateAvatar}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          palette={palette}
          handleReset={handleReset}
        />
        <Form
          palette={palette}
          onChangePalette={(ev) => setPalette(ev.target.value)}
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
          showButtons={showButtons}
          errorMsg={errorMsg}
          wholeCard={wholeCard}
          onCreateCard={(ev) => {
            ev.preventDefault();
            apiData(data).then((data) => {
              if (data.success) {
                setShowButtons(true);
                setErrorMsg("");
                setWholeCard(data.cardURL);
              } else {
                setErrorMsg(data.error);
              }
            });
          }}
        />
      </main>
    </>
  );
}

export default Main;
