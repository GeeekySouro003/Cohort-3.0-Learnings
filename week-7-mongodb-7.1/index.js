const express=require('express');
const {UserModel,TodoModel} = require('./db');
const app=express();

app.use(express.json());

app.post("/signup", async(req, res) => {

    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        "message": "You are successfully signed up",
    })



});

app.post("/signin", async(req, res) => {
    
const email=req.body.username;
const password=req.body.password;

const user=UserModel.findOne({
    email: email,
    password: password,
});

if(user) {
    const token= ({

    })
}

else {
    res.status(403).json({message: "Invalid credentials"})
}

})

app.post("/todos", (req, res) => {

})


app.get("/todos", (req, res) => {

})


    