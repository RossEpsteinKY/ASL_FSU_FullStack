const express = require('express');
const router = express.Router();
const {response} = require("express");
const session = require('express-session');
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const querystring = require("querystring");
const request = require("request");
const app = express();

router.get('/login', (req,res) => {
    console.log('freakaleak');
    res.render('auth/login');
});

router.get('/deleteSession', (req,res) => {
    req.session.destroy();
    res.redirect('/auth/login');

});

router.post('/callback', async (req, res) => {
    // res.render('auth/login');

    console.log('hit');
    const {code} = req.query;
    console.log(code);
    console.log('id',process.env.client_id);
    console.log('id',process.env.client_secret);
    const testit = await request({
        uri: 'https://github.com/login/oauth/access_token',
        qs: {
            client_id: process.env.client_id,
            client_secret: process.env.secret,
            code
        }
    }, async (error, response,body) => {
        const { access_token } = querystring.parse(body);;
        console.log(querystring.parse(body));
        req.session.access_token = access_token;
        // res.redirect('/');

        return req.session.access_token;
    });

    console.log(testit);


});

module.exports = router;
