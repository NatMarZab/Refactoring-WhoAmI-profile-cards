const express = require ('express');
const cors = require('cors');

const server = express();

//configurar servidor
server.use( cors() );
server.use( express.json() );
server.use(express.json({ limit: "10mb" }));
server.use( express.static("./public" ) );

// set template engine middlewares
server.set('view engine', 'ejs');

//arrancar servidor
const serverPort= process.env.PORT || 3002;
server.listen( serverPort, () => { console.log(`Server listening at http://localhost:${serverPort}`);});

// static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

//database
const Database = require("better-sqlite3");
const db = new Database("./src/database/awesome_db.db" , {
  verbose: console.log,
});

// endpoints

server.get('/card/:id', (req, res) => {
  // get card data
  const query = db.prepare(`SELECT * FROM users WHERE id = ?`);
  const cardData = query.get(req.params.id);
  console.log(cardData);

  res.render("views/card", cardData);
});

  server.post("/card/", (req, res) => {
    const query = db.prepare(
      `SELECT * FROM users WHERE palette= ? AND name = ? AND job = ? AND photo = ? AND email = ? AND phone = ? AND linkedin = ? AND github = ?`
    );  

    const foundUser = query.get (
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.photo,
      req.body.email,
      req.body.phone,
      req.body.linkedin,
      req.body.github
    );


    let responseError = "";
  console.log(foundUser);

  if (isNaN(parseInt(foundUser.palette))) {
    response.success = false;
    responseError = "Missing palette";
  } else if (foundUser.name === "") {
    response.success = false;
    responseError = "Missing name";
  } else if (foundUser.job === "") {
    response.success = false;
    responseError = "Missing job";
  } else if (foundUser.photo === "") {
    response.success = false;
    responseError = "Missing photo";
  } else if (foundUser.email === "") {
    response.success = false;
    responseError = "Missing email";
  } else if (foundUser.phone === "") {
    response.success = false;
    responseError = "Missing phone";
  } else if (foundUser.linkedin === "") {
    response.success = false;
    responseError = "Missing linkedin";
  } else if (foundUser.github === "") {
    response.success = false;
    responseError = "Missing github";
  } else {
    response.success = true;
    response.cardURL =
      "https://awesomeprofilecards.herokuapp.com/card/" +
      result.lastInsertRowid;
  }
  res.json({ error: responseError });

  console.log(foundUser);

  console.log("Petición tarjeta en /card");
  console.log(req.body);
  const response = {};

  res.json({ response });
});

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