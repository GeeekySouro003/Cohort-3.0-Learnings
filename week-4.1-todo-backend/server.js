const express = require('express');

const app=express();

const PORT=8000;

app.use(express.json()); //  use of middleware for requests

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});