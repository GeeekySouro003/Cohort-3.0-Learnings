const {Router} =require('express');
const userRouter=Router();
const {userModel}=require('../db.js');
const jwt=require('jsonwebtoken');
const {JWT_USER_SECRET}=require("../config.js");


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
    
    userRouter.post("/signin", async function(req, res) {

        const {email,password}=req.body;
        const user=await userModel.findOne({
            email: email,
            password: password
        });

        if(user) {
            const token=jwt.sign({
                id:user._id,
            },JWT_USER_SECRET);
        

        res.json({
            token: token
        })
    }
    
        else {
            res.status(403).json({
                message:"Invalid credentials"
            })
        }
    });

    userRouter.get("/purchases", function(req, res) {

        res.json({
            message:"Signup endpoint"
        })
    });
    
module.exports ={
    userRouter:userRouter,
}
    

