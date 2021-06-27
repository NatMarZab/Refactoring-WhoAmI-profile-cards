const express = require ('express');
const cors = require('cors');

const server = express(); //cambio tonto

//configurar servidor
server.use( cors() );
server.use( express.json() );

server.use( express.static("./public" ) );

//arrancar servidor
const serverPort= 5000;
server.listen( serverPort, () => { console.log(`Server listening at http://localhost:${serverPort}`);});


// modelo para hacer nuestro GET y POST cuando tengamos el fetch.
server.get('/card', (req, res) => {
    const response = {
      users: [{ name: 'Sofía' }, { name: 'María' }]
    };

    // PARAM URL
    // SERVIDOR DE DINAMICOS

    res.json(response);
  });
  
  // API request > POST > http://localhost:5000/new-user
  server.post('/card', (req, res) => {
    // console request body params
    console.log(`Creating the user in database with user name: "${req.body.userName}"`);
    const response = {
      result: `User created: ${req.body.userName}`
    };
    res.json(response);
  });