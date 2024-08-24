const fs = require('fs');
const inquirer = require('inquirer').default;
const path = require('path');

const filePath = path.join(__dirname, 'todos.json');

const initFile = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
};

const loadTodos = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const saveTodos = (todos) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

const showMenu = () => {
    console.log("\nToDo List CLI\n");
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What task would you like to do?',
            choices: ['Add ToDo', 'Edit ToDo', 'Delete ToDo', 'Mark as Done', 'View ToDos', 'Exit']
        }
    ]).then(answers => {
        switch (answers.action) {
            case 'Add ToDo':
                addTodo();
                break;
            case 'Edit ToDo':
                editTodo();
                break;
            case 'Delete ToDo':
                deleteTodo();
                break;
            case 'Mark as Done':
                markTodoAsDone();
                break;
            case 'View ToDos':
                viewTodos();
                break;
            case 'Exit':
                console.log("Goodbye!");
                process.exit();
        }
    });
};

// Add a new todo
const addTodo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'todo',
            message: 'Enter the new ToDo:'
        }
    ]).then(answer => {
        const todos = loadTodos();
        todos.push({ task: answer.todo, done: false });
        saveTodos(todos);
        console.log("ToDo added!");
        showMenu();
    });
};

// Edit an existing todo
const editTodo = () => {
    const todos = loadTodos();
    const choices = todos.map((todo, index) => ({
        name: todo.task,
        value: index
    }));

    inquirer.prompt([
        {
            type: 'list',
            name: 'todoIndex',
            message: 'Select a ToDo to edit:',
            choices
        },
        {
            type: 'input',
            name: 'updatedTask',
            message: 'Enter the new task content:',
        }
    ]).then(answers => {
        const { todoIndex, updatedTask } = answers;
        todos[todoIndex].task = updatedTask;
        saveTodos(todos);
        console.log("ToDo updated!");
        showMenu();
    });
};

// Delete a todo
const deleteTodo = () => {
    const todos = loadTodos();
    const choices = todos.map((todo, index) => ({
        name: todo.task,
        value: index
    }));

    inquirer.prompt([
        {
            type: 'list',
            name: 'todoIndex',
            message: 'Select a ToDo to delete:',
            choices
        }
    ]).then(answer => {
        todos.splice(answer.todoIndex, 1);
        saveTodos(todos);
        console.log("ToDo deleted!");
        showMenu();
    });
};

// Mark a todo as done
const markTodoAsDone = () => {
    const todos = loadTodos();
    const choices = todos.map((todo, index) => ({
        name: todo.task + (todo.done ? ' (Done)' : ''),
        value: index
    }));

    inquirer.prompt([
        {
            type: 'list',
            name: 'todoIndex',
            message: 'Select a ToDo to mark as done:',
            choices
        }
    ]).then(answer => {
        todos[answer.todoIndex].done = true;
        saveTodos(todos);
        console.log("ToDo marked as done!");
        showMenu();
    });
};

// View all todos
const viewTodos = () => {
    const todos = loadTodos();
    console.log("\nYour ToDo List:\n");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.task} ${todo.done ? '(Done)' : ''}`);
    });
    showMenu();
};

// Initialize
initFile();
showMenu();
