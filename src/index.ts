import { createConnection } from 'typeorm';
import "reflect-metadata";
import * as session from 'express-session';
import { register, login } from './routes/auth';

(async () => {
    await createConnection();

    var express = require('express');
    var app = express();
    var port = process.env.PORT || 8080;

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }))

    app.post('/register', register)
    app.post('/login', login)
    app.get('/login/test', (req, res) => {
        res.send(req.session.username);
    })

    app.listen(port);
    console.log('Server started! At http://localhost:' + port);
})();
