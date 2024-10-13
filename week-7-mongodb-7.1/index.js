const express=require('express');
const {UserModel,TodoModel} = require('./db.js');
const app=express();
const jwt=require('jsonwebtoken');
const JWT_SECRET = "souroisgoddd";
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://dcodespider:Mistun12345@cluster0.0kc4a.mongodb.net/todo-souro-app");
app.use(express.json());
app.post("/signup", async function(req, res){

    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        "message": "You are successfully signed up",
    })
});

app.post("/signin", async function (req, res) {
    
const email=req.body.email;
const password=req.body.password;

console.log("Email:", email);
console.log("Password:", password);

const user=await UserModel.findOne({
    email: email,
    password: password
})

console.log(user);

if (user) {
    const token= jwt.sign({
     id: user._id.toString()
    }, JWT_SECRET);
    res.json({
        token:token
    });
}
else {
    res.status(403).json({message: "Invalid credentials"})
}
});

app.post("/todos", (req, res) => {

})


app.get("/todos", (req, res) => {

})


app.listen(3000);