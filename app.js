const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth.routes');

app.use(authRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});