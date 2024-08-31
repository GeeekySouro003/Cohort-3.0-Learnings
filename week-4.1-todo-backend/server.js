const express = require('express');
const todoroutes = require('./routes/todoapp.js');
const app = express();

const PORT = 3000;

app.use(express.json()); // Middleware for JSON requests

app.use('/todos', todoroutes);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
