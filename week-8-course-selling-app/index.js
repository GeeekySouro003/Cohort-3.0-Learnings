const express=require('express');
const mongoose=require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const app=express();


app.use("api/v1/user",userRouter);
app.use("api/v1/course",courseRouter);
app.use("api/v1/admin",adminRouter);

//createUserRoutes(app);
//createCourseRoutes(app);

async function main() {
    await mongoose.connect("mongodb+srv://dcodespider:Mistun12345@cluster0.0kc4a.mongodb.net/coursenest-app");
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();

