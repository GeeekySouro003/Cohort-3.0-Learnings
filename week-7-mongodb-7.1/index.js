const express=require('express');
const {UserModel,TodoModel} = require('./db.js');
const {auth,JWT_SECRET} =require('./auth.js')
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://dcodespider:Mistun12345@cluster0.0kc4a.mongodb.net/todo-souro-app");
app.use(express.json());
app.post("/signup", async function(req, res){

    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    const hashedPassword= await bcrypt.hash(password,10);

    await UserModel.create({
        email: email,
        password: hashedPassword,
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
})


const passwordMatch = bcrypt.compare(password,user.password);

console.log(user);

if (user && passwordMatch) {
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

app.post("/todo", auth,async function (req, res){

    const userId=req.userId;
    const title=req.body.title;
    const done=req.body.done;

    await TodoModel.create({
        userId: userId,
        title: title,
        done:done
    });
    res.json({
        "message":"Todo created"
    })


});


app.get("/todos", auth, async function (req, res) {

    const userId=req.userId

    const todos= await TodoModel.find({
        userId
    })

    res.json({
        todos
    })
});


/*
function auth(req,res,next) {
    const token=req.headers.token;
    const decodeddata=jwt.verify(token,JWT_SECRET);

    if(decodeddata) {
        req.userId=decodeddata.id;
        next();
    }
    else {
        res.status(403).json({message: "Invalid credentials"})
    }
}

*/
app.listen(3000);