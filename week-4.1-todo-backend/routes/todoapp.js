const express = require('express');
const fs = require('fs');
const path = require('../../week-4.1-todo-backend/data/todos.json')
const todosPath = path.join(__dirname, '..', '..', 'data', 'todos.json');
const router = express.Router();

// Helper function to read tasks
const readtodo = () => {
    try {
        const data = fs.readFileSync(todosPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []; // return the empty list of tasks
    }
};


// Helper function to write tasks
const writetasks = (todos) => {
    fs.writeFileSync(todosPath, JSON.stringify(todos, null, 2), 'utf-8');
};

// Get all todos
router.get('/', (req, res) => {
    const todos = readtodo();
    res.json(todos);
});

// Add a new task
router.post('/', (req, res) => {
    const todos = readtodo();
    const newtask = {
        id: Date.now(),
        task: req.body.task,
        completed: false
    };
    todos.push(newtask);
    writetasks(todos);
    res.status(201).json(newtask);
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
    const todos = readtodo();
    const id = parseInt(req.params.id);

    const filteredTask = todos.filter(todo => todo.id !== id);

    if (filteredTask.length !== todos.length) {
        writetasks(filteredTask);
        res.status(200).json({ message: "Task deleted successfully" });
    } else {
        res.status(404).json({ message: "Task does not exist" });
    }
});

// Edit a task or mark as completed by ID
router.put('/:id', (req, res) => {
    const todos = readtodo();
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        // Edit the task content if provided
        todos[index].task = req.body.task || todos[index].task;

        // Mark the task as done/undone if provided
        todos[index].completed = req.body.completed !== undefined ? req.body.completed : todos[index].completed;

        writetasks(todos);
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: "Task does not exist" });
    }
});

module.exports = router;
