const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});