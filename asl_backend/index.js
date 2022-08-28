const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
// const session = require('express-session');
const session = require('cookie-session');
const app = express();
require('dotenv').config();

const quizzesController = require('./src/controllers/quizzes');
const questionController = require('./src/controllers/questions');
const choicesController = require('./src/controllers/choices');
const authController = require('./src/controllers/auth');
const limiter = require('express-rate-limit')
const { isAuthenticated } = require("./src/middleware/auth");
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require('csurf');



app.use(
    session({
        saveUninitialized: false,
        name: 'session',
        secret: 'T3s7!ng',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hour expiration token
    })
);

app.use(bodyParser.urlencoded({ extended: false }))
app.set('views',__dirname + '/src/views');
app.set('view engine','twig');

// app.get('/',(req,res) =>{
//     // res.send("HOMEPAGE");
//     res.render('home');
// })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/quizzes', quizzesController);
app.use('/questions', questionController);
app.use('/choices', choicesController);
app.use('/auth', authController);

app.get('/', isAuthenticated, async  (req,res) => {
    console.log('TOKEN', req.session.access_token);
    res.render('home');
});

app.listen(5000);
console.log('Listening on port 5000!');
