// app.js
// Used to connect to the mongoDB database, and host the REST API

const express = require('express'); // Imports express
const app = express();  // Stores express to app
const mongoose = require('mongoose'); // Imports mongoose
const bodyParser = require('body-parser'); // Imports bodyParser
const cors = require('cors'); // Imports cors
require('dotenv/config'); // Imports dotenv

//Middlewares
app.use(cors()); // Tells website to use cors
app.use(bodyParser.json());

//import routes
const infoRoute = require('./routes/infos');

app.use('/', infoRoute);

//Connects to mongoDB database
mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true,
    useUnifiedTopology: true },
 () =>  console.log('connected to DB')
 )
//listen to rest API at localhost port 3000
app.listen(3000);