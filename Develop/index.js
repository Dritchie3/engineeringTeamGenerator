// create variables
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require('./lib/htmlRenderer');
const inquirer = require("inquirer");
const path = require("path");


const OUTPUTDIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUTDIR, 'team.html');

// crrate inquirer 'add enother employee' prompt
const confirm = 
    {
        message: 'Add an employee?',
        name: 'name',
        type: 'confirm',
        // choice: 'confirm'
    }

// create array to hold employee entered data
const employees = [];
//  create inquirer prompt questions non-unique
const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Engineer', 'Manager', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];
// Create inquirer unique prompt questions for specific roles
const engineerQ = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    }
];

const internQ = [
    {
        type: 'input',
        name: 'school',
        message: 'What is your school?'
    }
];
const managerQ = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the name of your office number?'
    }
];

// create async functions fore each role type
const engineers = async (data) => {
    const res = await inquirer.prompt(engineerQ)
    const e = new Engineer(data.name, data.id, data.email, res.github)
    employees.push(e)
    // JSON.stringify to be able to see data in object
    // let employeesOBJ = JSON.stringify(employees);
    // console.log('employeesOBJ = ' + employeesOBJ);
    init()
};
const managers = async (data) => {
    const res = await inquirer.prompt(managerQ)
    const e = new Manager(data.name, data.id, data.email, res.officeNumber)
    employees.push(e)
    // JSON.stringify to be able to see data in object
    // let employeesOBJ = JSON.stringify(employees);
    // console.log('employeesOBJ = ' + employeesOBJ);
    init()
};
const interns = async (data) => {
    const res = await inquirer.prompt(internQ)
    const e = new Intern(data.name, data.id, data.email, res.school)
    employees.push(e)
    // JSON.stringify to be able to see data in object
    // let employeesOBJ = JSON.stringify(employees);
    // console.log('employeesOBJ = ' + employeesOBJ);
    init()
};

// init() function to start prompting of Data
const init = async () => {
    const choice = await inquirer.prompt(confirm);  
    if(choice.name) {
        console.log('choice.confirm = ' , choice);
        const res = await inquirer.prompt(questions);        
        console.log(res);
        // Depending on role choice, return appropriate role function with the 'res' as the data
        switch(res.role) {
            case 'Manager':
                return managers(res) ;               
            case 'Engineer':
                return engineers(res);
            case 'Intern':
                return interns(res);
        }
    }else { 
        exit(employees);  
    console.log('Thanks for your input.');
    };    
};

// create exit() function to render HTML upon exit
const exit = async (data) => {
    let filledIn = render(employees)
    fs.writeFile(outputPath, filledIn, ()=>{
//call a command in node
    })
};

// Start init() function
init();