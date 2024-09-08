const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="randomsourojodd";
const users=[];
app.use(express.json());




app.post('/signup',(req,res) => {
const username=req.body.username;
const password=req.body.password;

users.push({
    username,
    password
})

res.send({
    message:"You have successfully signed up"
})

})

app.post('/signin',(req,res) => {

const username=req.body.username;
const password=req.body.password;

const user = users.find(user => user.username === username && user.password === password);

if(user ) {
    const token=jwt.sign({    // function signature of jsonwebtoken
        username: user.username
    },JWT_SECRET);
    user.token = token;
    res.send ({
        token
    })
    console.log(users);
}

else {
    res.status(403).send({
        message:"Invalid username or password"
})
}
console.log(users);
})


app.get('/me',(req,res) => {
    const token=req.headers.authorization;
    const userdetails=jwt.verify(token,JWT_SECRET);
    const username=userdetails.username;
    const user=users.find(user => user.username === username);

    if(user) {
        res.send ({
            username: user.username,
            password: user.password
        })
    }
    else {
        res.status(401).send ({
            message:"Unauthorized"
        })
    }
})




app.listen(3000);