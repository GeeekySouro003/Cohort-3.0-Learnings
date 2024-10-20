const {Router} =require('express');
const userRouter=Router();
const {userModel}=require('../db.js');


   userRouter.post("/signup",async function(req,res) {

    const {email,password,firstName,lastName}=req.body;
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message:"Sign up successfully done"
    })

   })
    
    userRouter.post("/signin", function(req, res) {
    
        res.json({
            message:"Signup endpoint"
        })
    });

    userRouter.get("/purchases", function(req, res) {

        res.json({
            message:"Signup endpoint"
        })
    });
    
module.exports ={
    userRouter:userRouter,
}
    

