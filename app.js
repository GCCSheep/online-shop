const path = require('path');
const express = require('express');
const csrf = require('csurf');
const port = 3000;
const expressSession = require('express-session');
const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleWare = require('./middlewares/error-handler');
const authRoutes = require('./routes/auth.routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession(createSessionConfig()));
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(authRoutes);
app.use(errorHandlerMiddleWare);

db.connectToDatabase()
    .then(() =>
        app.listen(3000)
    )
    .catch(error => {
        console.log('Failed to connect to database.');
        console.log(error);
    });