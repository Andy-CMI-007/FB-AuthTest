//Server vars
const express = require('express');
const app = express();
require('dotenv').config();

const port =  process.env.PORT || 6000;

//Firbase objects and things
var admin = require("firebase-admin");
const serviceAccount = require("./fb-app-credentials.json");





app.get('/', (_, res) => 
{
    res.send('HELLO this does nothing sod off');
});
app.get('/users', (_, res) => 
{

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
   
});
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});

