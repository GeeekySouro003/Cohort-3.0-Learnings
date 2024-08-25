const express = require('express');
const app=express();

//route handlers

app.get('/',function(req,res) {
    res.send("<b>Hello, world!</b>");
})


app.post('/asd',function(req,res) {
res.send("Hello, Harkirat");    
})

app.get('/asd',function(req,res) {
    res.send("Hello, Harkirat this is souradip");    
    })
app.listen(3000);  // port on which we want to listen on
