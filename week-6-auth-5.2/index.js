const express = require('express');
const app = express();
const jwt=require('jsonwebtoken');


const JWT_SECRET="sourogodd";
let users=[] // in memory db

app.use(express.json());

app.post('/signup', function(req, res) {
const username=req.body.username;
const password=req.body.password;

users.push ({
    username,
    password
})

res.send ({
    message:"You are successfully signed up"
})
})


app.post('/signin', function(req, res) {
    const username=req.body.username;
    const password=req.body.password;

    const user= users.find(user => user.username === username && user.password === password);

    if(user) {
        const token=jwt.sign({
            username: username.username,
        },JWT_SECRET)
        user.token = token;
        res.send ({
            token
        })
        console.log(users);
    }

    else {
        res.status(401).send({
            message:"Invalid credentials"
        })
    }
})


app.get('/me', function(req, res) {

})