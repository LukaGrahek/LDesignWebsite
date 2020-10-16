const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const infoRoute = require('./routes/infos');

app.use('/', infoRoute)

// //ROUTES (patch-update,delete-delete info,get-getinfo,post-giveinfo)
// app.get('/', (req,res) => {
// });



//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true,
    useUnifiedTopology: true },
 () =>  console.log('connected to DB')
 )
//listen to server
app.listen(3000);