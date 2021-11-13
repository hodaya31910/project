const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const rout = require('./rout/api')
const request= require('request');
app.use(bodyParser.json());
dotenv.config();

app.use('/', rout);

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected DB");
    }).catch((err) => console.log(err));


// const func = () => {
//     //יוצר מחרוזת סודית 
//     let token = jwt.sign({ name: "hodaya", password: "123456" }, process.env.SECRET);
//     console.log("token===", token);

// }
// func()
app.listen(4000, function () { console.log('listening on port 4000') })