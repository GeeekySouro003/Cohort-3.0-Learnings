const express = require('express');
const app = express();
const jwt=require('jsonwebtoken');


const JWT_SECRET="sourogodd";
let users=[] // in memory db

app.use(express.json());

function auth(req, res, next) {
    const token=req.headers.authorization;

    if(token) {
        jwt.verify(token,JWT_SECRET,(err,decoded) => {
            if(err) {
                res.status(401).send({
                    message: "Unauthorized",
                })
            }
            else {
                req.user=decoded;
                next();
            }
        })
    }
    else {
        res.status(401).send({
            message: "Unauthorized",
        })
    }
}

function logger(req, res, next) {
    console.log(req.method+ "request came");
    next();
}


app.get('/',function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/signup',logger, function(req, res) {
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


app.post('/signin',logger,function(req, res) {
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


app.get("/meu",logger,auth,function(req, res) {
    const user=req.user;
    res.json({
        username: user.username,
        password: user.password
    })
})
app.get('/me', function(req, res) {
const token=req.headers.token;

const decodeData=jwt.verify(token,JWT_SECRET);  // decoding using secret key to prevent security vulnerability

if(decodeData.username) {
    const user=users.find(user => user.username === username);

    res.json({
        username:user.username,
        password:user.password
    })
}
else {
    res.status(401).send({
        message:"Unauthorized"
    })
}
})

app.listen(3000);