const express = require('express');
const fs=require('fs');
const path= '../data/todos.json';
const router=express.Router();

const readtodo = () => {
    try {
        const data = fs.readFileSync(path,'utf-8');
        return JSON.parse(data);
        
    } catch (error) {
        return []; // return the empty list of tasks
    }
}

const writetasks =(todos) => {
    fs.writeFileSync(path,JSON.stringify(todos,null,2),'utf-8');
};

router.get('/',(req,res) => { //Get all the todos
    const todos=readtodo();
    res.json(todos);
});

router.post('/', (req,res) => { // Add a task 
  const todos=readtodo();
  const newtask={
    id:Date.now(),
    task:req.body.task,
    completed:false
  };
  todos.push(newtask);
  writetasks(todos);
  res.status(201).json(newtask);
});



