const { application } = require('express');
const session = require('express-session');
const sequelize = require('sequelize');
const { Sequelize } = require('../config/connection');

const sequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: "",
    cookie: {
        maxAge: 8400,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUnititialized: true,
    store: new sequelizeStore({
        db: Sequelize,
    }),
};

app.use(session(sess));