const express=require('express');
const {UserModel,TodoModel} = require('./db.js');
const {auth,JWT_SECRET} =require('./auth.js')
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const {z} = require('zod');
mongoose.connect("mongodb+srv://dcodespider:Mistun12345@cluster0.0kc4a.mongodb.net/todo-souro-app");
app.use(express.json());
app.post("/signup", async function(req, res){

    const requiredbody=z.object({
        email:z.string().min(4).max(100).email(),
        password:z.string().min(4).max(100),
        name:z.string().min(4).max(40)
    })
    
    //const parseddata=requiredbody.parse(req.body);

    const parsedatasuccess=requiredbody.safeParse(req.body);  // safe parse doesnt throw error it return if ok true or not okay the incorrect fields

    if(!parsedatasuccess.success) {
        res.json({
            message: "Incorrect format",
            error:parsedatasuccess.error

        
        })
        return
    }



    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    const hashedPassword= await bcrypt.hash(password,10); //10 is the saltrounds more saltrounds better it is 
    console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({
        "message": "You are successfully signed up",
    })
    }
    
);

app.post("/signin", async function (req, res) { 
const email=req.body.email;
const password=req.body.password;

console.log("Email:", email);
console.log("Password:", password);

const response=await UserModel.findOne({
    email: email,
})


const passwordMatch = bcrypt.compare(password,user.password);

console.log(response);

if (response && passwordMatch) {
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