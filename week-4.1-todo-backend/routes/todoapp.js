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


router.delete('/:id', (req, res) => {
    const todos=readtodo();
    const id=parseInt(req.params.id);

    const filteredTask = todos.filter(todo => todo.id !== id); 


    if(filteredTask.length !== todos.length) {
        writetasks(filteredTask);
        res.status(200).json({message:"Task deleted successfully "});
    }
    else {
        res.status(404).json({message:"Task does not exist "});
    }
})


router.put('/:id', (req, res) => {
    const todos=readtodo();
    const id=parseInt(req.params.id);9
    const index=todos.findIndex(todo =>todo.id === id);

    if(index !== -1) {
        todos[index].task=req.body.task || todos[index].task;
        todos[index].completed=req.body.completed !== undefined ? req.body.completed : todos[index].completed;
        writetasks(todos);
        res.json(todos[index]);
    } 
    else {
        res.status(404).json({message:"Task does not exist "});
    }
});

module.exports=router;

