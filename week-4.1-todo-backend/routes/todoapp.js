const express = require('express');
const fs = require('fs');
const path = require('path');
const todosPath = path.join(__dirname, '..', 'data', 'todos.txt');
const router = express.Router();

let todos = []; // Keep the tasks in memory as an array

// Helper function to read tasks from a txt file and convert them into the array
const readtodo = () => {
    try {
        const data = fs.readFileSync(todosPath, 'utf-8');
        todos = data
            .split('\n')
            .filter(Boolean) // Remove empty lines
            .map((line) => {
                const [id, task, completed] = line.split(',');
                return {
                    id: parseInt(id, 10),
                    task: task.trim(),
                    completed: completed === 'true',
                };
            });
    } catch (error) {
        todos = []; // return the empty list of tasks if error occurs
    }
};

// Helper function to write the array into a txt file
const writetasks = () => {
    const data = todos
        .map(todo => `${todo.id},${todo.task},${todo.completed}`)
        .join('\n');
    fs.writeFileSync(todosPath, data, 'utf-8');
};

// Get all todos
router.get('/', (req, res) => {
    readtodo();
    res.json(todos);
});

// Add a new task
router.post('/', (req, res) => {
    readtodo();
    const newtask = {
        id: Date.now(),
        task: req.body.task,
        completed: false,
    };
    todos.push(newtask);
    writetasks();
    res.status(201).json(newtask);
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
    readtodo();
    const id = parseInt(req.params.id);
    const filteredTask = todos.filter(todo => todo.id !== id);

    if (filteredTask.length !== todos.length) {
        todos = filteredTask;
        writetasks();
        res.status(200).json({ message: "Task deleted successfully" });
    } else {
        res.status(404).json({ message: "Task does not exist" });
    }
});

// Edit a task or mark as completed by ID
router.put('/:id', (req, res) => {
    readtodo();
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todos[index].task = req.body.task || todos[index].task;
        todos[index].completed = req.body.completed !== undefined ? req.body.completed : todos[index].completed;
        writetasks();
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: "Task does not exist" });
    }
});

module.exports = router;
