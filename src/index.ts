import { createConnection } from 'typeorm';
import "reflect-metadata";
import * as session from 'express-session';
import { register, login } from './routes/auth';
import { keys, sendMessage, getMessages, getUserKeys } from './routes/signal';
import { startVideoRoom } from "./routes/video";

(async () => {
    await createConnection();

    var express = require('express');
    var app = express();
    var port = process.env.PORT || 8080;

    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    var whitelist = ['http://localhost:8080', 'http://localhost:8081']
    var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
            } else {
            callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true
    }
    app.use(require("cors")(corsOptions))
    app.use(session({
        cookieName: 'sessionName',
        secret: 'keyboard cat',
        path: '/', 
        cookie: {
            httpOnly: false,
            secure: false, 
            maxAge: null
        },
        resave: true,
        saveUninitialized: true,
    }))

    app.post('/register', register)
    app.get('/messages', getMessages)
    app.post('/login', login)
    app.get('/login/test', (req, res) => {
        res.send(req.session.username);
    })

    app.post('/keys', keys)
    // app.get('/users')
    app.post('/users/:user/send', sendMessage)
    app.get('/users/:user/keys', getUserKeys)

    app.post('/users/:user/video', startVideoRoom);

    app.listen(port);
    console.log('Server started! At http://localhost:' + port);
})();
