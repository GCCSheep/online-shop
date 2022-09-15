const path = require('path');
const express = require('express');
const csrf = require('csurf');
const app = express();
const port = 3000;
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const authRoutes = require('./routes/auth.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(authRoutes);

db.connectToDatabase()
    .then(() =>
        app.listen(3000)
    )
    .catch(error => {
        console.log('Failed to connect to database.');
        console.log(error);
    });