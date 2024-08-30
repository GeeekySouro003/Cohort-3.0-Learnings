const express = require('express');
const todoroutes=require('./routes/todoapp.js')
const app=express();

const PORT=8000;

app.use(express.json()); //  use of middleware for requests


app.use('/todos',todoroutes)
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});