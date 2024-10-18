const mongoose = require('mongoose');
console.log("Connected to ")
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const UserSchema = new Schema({
email:{type:String,unique:true},
password:String,
firstName:String,
lastName:String,
});

const adminSchema = new Schema ({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});

const courseSchema  = new Schema ({
title:String,
description:String,
price:Number,
imageUrl:String,
creatorId:ObjectId
});


const PurchaseSchema = new Schema ({

    userId:ObjectId,
    courseId:ObjectId,
});

const UserModel=mongoose.model("user",UserSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",PurchaseSchema);

module.exports={
    UserModel,
    adminModel,
    courseModel,
    purchaseModel
}