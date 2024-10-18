const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const UserSchema=({
email:{type:String,unique:true},
password:String,
firstName:String,
lastName:String,
});

const adminSchema= ({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});

const courseSchema= ({
title:String,
description:String,
price:Number,
imageUrl:String,
creatorId:ObjectId
});


const PurchaseSchema=({

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