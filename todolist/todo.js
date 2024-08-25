const fs = require('fs');
const inquirer = require('inquirer').default;
const path = require('path');
const chalk = require('chalk'); // Import chalk module

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
    console.log(chalk.blue.bold("\nToDo List CLI\n")); // Title in blue
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: chalk.yellow('What task would you like to do?'), // Prompt in yellow
            choices: [
                chalk.green('Add ToDo'),
                chalk.cyan('Edit ToDo'),
                chalk.red('Delete ToDo'),
                chalk.magenta('Mark as Done'),
                chalk.blue('View ToDos'),
                chalk.gray('Exit')
            ]
        }
    ]).then(answers => {
        const action = answers.action.replace(/\x1B\[\d+m/g, ''); // Strip color formatting for switch case
        switch (action) {
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
                console.log(chalk.gray("Goodbye!"));
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
            message: chalk.yellow('Enter the new ToDo:')
        }
    ]).then(answer => {
        const todos = loadTodos();
        todos.push({ task: answer.todo, done: false });
        saveTodos(todos);
        console.log(chalk.green("ToDo added!"));
        showMenu();
    });
};

// Edit an existing todo
const editTodo = () => {
    const todos = loadTodos();
    const choices = todos.map((todo, index) => ({
        name: chalk.cyan(todo.task), // Show tasks in cyan
        value: index
    }));

    inquirer.prompt([
        {
            type: 'list',
            name: 'todoIndex',
            message: chalk.yellow('Select a ToDo to edit:'),
            choices
        },
        {
            type: 'input',
            name: 'updatedTask',
            message: chalk.yellow('Enter the new task content:'),
        }
    ]).then(answers => {
        const { todoIndex, updatedTask } = answers;
        todos[todoIndex].task = updatedTask;
        saveTodos(todos);
        console.log(chalk.green("ToDo updated!"));
        showMenu();
    });
};

// Delete a todo
const deleteTodo = () => {
    const todos = loadTodos();
    const choices = todos.map((todo, index) => ({
        name: chalk.red(todo.task), // Show tasks to be deleted in red
        value: index
    }));

    inquirer.prompt([
        {
            type: 'list',
            name: 'todoIndex',
            message: chalk.yellow('Select a ToDo to delete:'),
            choices
        }
    ]).then(answer => {
        todos.splice(answer.todoIndex, 1);
        saveTodos(todos);
        console.log(chalk.red("ToDo deleted!"));
        showMenu();
    });
};

// Mark a todo as done
const markTodoAsDone = () => {
    const todos = loadTodos();
    const choices = todos.map((todo, index) => ({
        name: todo.done ? chalk.green(todo.task + ' (Done)') : todo.task, // Done tasks in green
        value: index
    }));

    inquirer.prompt([
        {
            type: 'list',
            name: 'todoIndex',
            message: chalk.yellow('Select a ToDo to mark as done:'),
            choices
        }
    ]).then(answer => {
        todos[answer.todoIndex].done = true;
        saveTodos(todos);
        console.log(chalk.green("ToDo marked as done!"));
        showMenu();
    });
};

// View all todos
const viewTodos = () => {
    const todos = loadTodos();
    console.log(chalk.blue("\nYour ToDo List:\n"));
    todos.forEach((todo, index) => {
        const taskDisplay = `${index + 1}. ${todo.task}`;
        if (todo.done) {
            console.log(chalk.green(taskDisplay + ' (Done)')); // Completed tasks in green
        } else {
            console.log(chalk.blue(taskDisplay)); // Pending tasks in blue
        }
    });
    showMenu();
};

// Initialize
initFile();
showMenu();
