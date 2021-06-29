const express = require("express");
const cors = require("cors");

const server = express();

//configurar servidor
server.use(cors());
server.use(express.json());
server.use(express.json({ limit: "10mb" }));
server.use(express.static("./public"));

// set template engine middlewares
server.set("view engine", "ejs");

//arrancar servidor
const serverPort = process.env.PORT || 3002;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


//database
const Database = require("better-sqlite3");
const db = new Database("./src/database/awesome_db.db", {
  verbose: console.log,
});

// endpoints

server.get("/card/:id", (req, res) => {
  console.log("/card");
  // get card data
  const query = db.prepare(`SELECT * FROM card WHERE id = ?`);
  const cardData = query.get(req.params.id);
  console.log(cardData);

  res.render("card", cardData);
});

server.post("/card/", (req, res) => {
  /*
  const query = db.prepare(
    `SELECT * FROM card WHERE palette= ? AND name = ? AND job = ? AND photo = ? AND email = ? AND phone = ? AND linkedin = ? AND github = ?`
  );

  const foundUser = query.get(
    req.body.palette,
    req.body.name,
    req.body.job,
    req.body.photo,
    req.body.email,
    req.body.phone,
    req.body.linkedin,
    req.body.github
  );
*/
  let response = {};
  console.log(req.body);

  if (isNaN(parseInt(req.body.palette))) {
    response.success = false;
    response.error = "Elige paleta de colores";
  } else if (req.body.name === "") {
    response.success = false;
    response.error = "Falta el nombre";
  } else if (req.body.job === "") {
    response.success = false;
    response.error = "Falta el puesto";
  } else if (req.body.photo === "") {
    response.success = false;
    response.error = "Falta la imagen";
  } else if (req.body.email === "") {
    response.success = false;
    response.error = "Falta el email";
  } else if (req.body.phone === "") {
    response.success = false;
    response.error = "Falta el teléfono";
  } else if (req.body.linkedin === "") {
    response.success = false;
    response.error = "Falta el usuario de linkedin";
  } else if (req.body.github === "") {
    response.success = false;
    response.error = "Falta el usuario de github";
  } else {
    const query = db.prepare(
      `INSERT INTO card (palette, name, job, photo, email, phone, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.photo,
      req.body.email,
      req.body.phone,
      req.body.linkedin,
      req.body.github
    );
    response.success = true;

    if( req.hostname === 'localhost' ) {
      response.cardURL =
      `http://localhost:${serverPort}/card/` +
      result.lastInsertRowid;
    }
    else {
      response.cardURL =
      "https://awesome-profile-card.herokuapp.com/card/" +
      result.lastInsertRowid;
    }

    
  }
  res.json(response);

});


// static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

// modelo para hacer nuestro GET y POST cuando tengamos el fetch.
// server.get('/card', (req, res) => {
//     const response = {
//       users: [{ name: 'Sofía' }, { name: 'María' }]
//     };

// PARAM URL
// SERVIDOR DE DINAMICOS

// // API request > POST > http://localhost:3002/new-user
// server.post('/card', (req, res) => {
//   // console request body params
//   console.log(`Creating the user in database with user name: "${req.body.userName}"`);
//   const response = {
//     result: `User created: ${req.body.userName}`
//   };
//   res.json(response);
// });
