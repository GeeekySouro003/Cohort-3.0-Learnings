const {Router} = require('express');
const adminRouter=Router();
const {adminModel}= require('../db.js');
const jwt=require('jsonwebtoken');
const {JWT_ADMIN_SECRET}=require('../config.js');
adminRouter.post("/signup", async function(req, res) {
    const{email,password,firstName,lastName}=req.body;
    await adminModel.create({email: email, password: password, firstName: firstName,lastName: lastName});
    res.json({
        message:"Sign up successfully done for admim"
    })
})

adminRouter.post("/signin", async function(req, res) {

    const {email,password}=req.body;
        const admin=await adminModel.findOne({
            email: email,
            password: password
        });

        if(admin) {
            const token=jwt.sign({
                id:admin._id,
            },JWT_ADMIN_SECRET);
        

        res.json({
            token: token
        })
    }
    
        else {
            res.status(403).json({
                message:"Invalid credentials"
            })
        }
})

adminRouter.post("/course", function(req, res) {
    res.json({
        message:"Sign up endpoint"
    })
})

adminRouter.put("/course", function(req, res) {   // change the course
    res.json({
        message:"Sign up endpoint"
    })
})


adminRouter.put("/course/bulk", function(req, res) {   // change the course
    res.json({
        message:"Sign up endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}