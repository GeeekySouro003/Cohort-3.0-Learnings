const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email:String,
    password:String,
    name:String,
})

const Todos=new Schema({
    title:String,
    done:Boolean,
    userId:ObjectId
})

const UserModel=mongoose.model("users",User);  // the users paramter is the database collection where the data to be inserted and the User is the object we created
const TodoModel=mongoose.model("todos",Todo);

modules.export = {
    UserModel,
    TodoModel
}
