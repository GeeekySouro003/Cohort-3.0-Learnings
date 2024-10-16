const express = require('express');
const { UserModel, TodoModel } = require('./db.js');
const { auth, JWT_SECRET } = require('./auth.js');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { z } = require('zod');

mongoose.connect("mongodb+srv://dcodespider:Mistun12345@cluster0.0kc4a.mongodb.net/todo-souro-app");
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredbody = z.object({
        email: z.string().min(4).max(100).email(),
        password: z.string().min(4).max(100).regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,  // updated the assignment of week 7.2
        ),
        name: z.string().min(4).max(40)
    });

    const parsedatasuccess = requiredbody.safeParse(req.body);

    if (!parsedatasuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedatasuccess.error
        });
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({
        message: "You are successfully signed up",
    });
});

app.post("/signin", async function (req, res) { 
    const email = req.body.email;
    const password = req.body.password;

    console.log("Email:", email);
    console.log("Password:", password);

    const response = await UserModel.findOne({ email });

    if (response && await bcrypt.compare(password, response.password)) {
        const token = jwt.sign({ id: response._id.toString() }, JWT_SECRET);
        res.json({ token: token });
    } else {
        res.status(403).json({ message: "Invalid credentials" });
    }
});

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId: userId,
        title: title,
        done: done
    });

    res.json({ message: "Todo created" });
});

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({ userId });

    res.json({ todos });
});

app.listen(3000);
