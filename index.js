const express = require('express');
const cookieSession = require('cookie-session');
const connection = require('./database');
const path = require('path');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000
}));

const notLoggedIn = (req, res, next) => {
    if (!req.session.loggedIn) {
        return res.render('login');
    }
    next();
}

const loggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
        return res.redirect('/home');
    }
    next();
}

/**
 * Root
 */

/**
 * Registration
 */

/**
 * Login
 */

/**
 * Logout
 */

/**
 * Unknown page
 */

app.use('/', (req, res) => {
    res.status(404).send('<h1>404 Page not found.</h1>');
})

const server_port = 1337;

app.listen(server_port, () => serverMessage('Listening on port: ' + server_port));

function serverMessage(string) {
    console.log(`[SERVER] ` + string);
}

