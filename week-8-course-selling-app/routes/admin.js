const {Router} = require('express');
const adminRouter=Router();
const {adminModel, courseModel}= require('../db.js');
const jwt=require('jsonwebtoken');
const {JWT_ADMIN_SECRET}=require('../config.js');
const { adminMiddleware } = require('../middleware/admin.js');
const course = require('./course.js');
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

adminRouter.post("/course",adminMiddleware, async function(req, res) {
    const adminId=req.userId;

    const {title,description,price,imageUrl}=req.body;
    await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId:adminId
    })
    res.json({
        message:"Course created",
        courseId:course._id
    })
})

adminRouter.put("/course", adminMiddleware,async function(req, res) { // change the course
    const adminId=req.userId;

    const {title,description,imageUrl,price,courseId}=req.body;

    const course=await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price:price
    })

    res.json({
        message:"Course updated",
        courseId:course._id
    })
})


adminRouter.put("/course/bulk", adminMiddleware,async function(req, res) {   // change the course
    
    const adminId=req.userId;

    const courses=await courseModel.find({
        creatorId:adminId
    });
    res.json({
        message:"Course updated",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}