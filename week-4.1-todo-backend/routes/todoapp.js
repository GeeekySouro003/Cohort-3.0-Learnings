const express = require('express');
const fs = require('fs');
const path = require('path');
const todosPath = path.join(__dirname, '..', 'data', 'todos.txt');
const router = express.Router();

let todos = []; // In-memory array to store tasks

// Helper function to read tasks from a txt file and parse them as JSON
const readtodo = () => {
    try {
        const data = fs.readFileSync(todosPath, 'utf-8');
        todos = data
            .split('\n')
            .filter(Boolean) // Remove empty lines
            .map((line) => JSON.parse(line)); // Parse each line as a JSON object
    } catch (error) {
        todos = []; // Return an empty list if error occurs
    }
};

// Helper function to write tasks in JSON format into the txt file
const writetasks = () => {
    const data = todos
        .map(todo => JSON.stringify(todo)) // Convert each todo object to a JSON string
        .join('\n'); // Join tasks with newlines
    fs.writeFileSync(todosPath, data, 'utf-8');
};

// Get all todos
router.get('/', (req, res) => {
    readtodo(); // Read tasks from file
    res.json(todos); // Respond with the array of todos
});

// Add a new task
router.post('/', (req, res) => {
    readtodo(); // Read existing tasks
    const newtask = {
        id: Date.now(), // Use current timestamp as ID
        task: req.body.task, // Task content from request body
        completed: false // New tasks are incomplete by default
    };
    todos.push(newtask); // Add the new task to the array
    writetasks(); // Write updated array to file
    res.status(201).json(newtask); // Respond with the new task
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
    readtodo(); // Read existing tasks
    const id = parseInt(req.params.id); // Parse the task ID from the URL parameter
    const filteredTask = todos.filter(todo => todo.id !== id); // Filter out the task with the given ID

    if (filteredTask.length !== todos.length) { // Check if task was found
        todos = filteredTask; // Update the array with filtered tasks
        writetasks(); // Write updated array to file
        res.status(200).json({ message: "Task deleted successfully" }); // Respond with success
    } else {
        res.status(404).json({ message: "Task does not exist" }); // Respond with error if task not found
    }
});

// Edit a task or mark as completed by ID
router.put('/:id', (req, res) => {
    readtodo(); // Read existing tasks
    const id = parseInt(req.params.id); // Parse the task ID from the URL parameter
    const index = todos.findIndex(todo => todo.id === id); // Find the index of the task with the given ID

    if (index !== -1) { // Check if task was found
        todos[index].task = req.body.task || todos[index].task; // Update task content if provided
        todos[index].completed = req.body.completed !== undefined ? req.body.completed : todos[index].completed; // Update completed status if provided
        writetasks(); // Write updated array to file
        res.json(todos[index]); // Respond with the updated task
    } else {
        res.status(404).json({ message: "Task does not exist" }); // Respond with error if task not found
    }
});

module.exports = router;
