const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlRenderer");

const question = [
    {
        type: 'list',
        message: 'What is your role?',
        choices: ['Engineer', 'Intern', 'Manager'],        
        name: 'role'
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
]

const addEmployee =
    {
        type: 'confirm',
        message:'Add another employee?',
        name: 'confirm'
    };


// add   Class position = to make the lower positions????

const engineer = {  
    type: 'input',
    message: 'What is your gihub user id?',
    name: 'userId'    
};
const manager = {  
    type: 'input',
    message: 'What is your office number?',
    name: 'officeNum'    
};
const intern = {  
    type: 'input',
    message: 'What school do you attend?',
    name: 'schoolAttending'    
};

var employees = [];

const init = async () => {    
    inquirer.prompt(question)
        .then(answers => {
            employees.push(answers) 
            console.log('answers.role = ' + answers.role);

            let employeesObj = JSON.stringify(employees);
            console.log('employeesObj= ' + employeesObj);

            if(answers.role === 'Engineer'){
                inquirer.prompt(engineer)
                .then(engId =>{
                    console.log('Engineer was chosen', engId)
                    employees.push(engId) 
                    console.log('employyee array = ' + employeeObj);
                    // return engEl
                });
            }else if(answers.role === 'Manager') {
                inquirer.prompt(manager)
                .then(offNum => {
                    console.log('manager was chosen', + offNun)
                    employees.push(offNun) 
                    console.log('employeeObj = ' + employeeObj);
                });
            }else if(answers.role === 'Intern') {
                inquirer.prompt(intern)
                .then(School => {
                    console.log('Intern was chosen', + school)
                    employees.push(school);
                });
            console.log('employyee array = ' + employeeObj);
            };

            // init2();
            
    // make statement wait until if statements are finished
    const init2 = async () => {  
        inquirer.prompt(addEmployee)
        .then(nextEmp => {
            employees.push(nextEmp) 
        });
    };
    




            // let answerObj = JSON.stringify(answers); 
            // console.log(answerObj);
                       
            // let addEmployee = JSON.stringify(employees[0].confirm);
            // console.log('addEmployee was Y = ' + addEmployee);
            // if(addEmployee) {
            //     console.log('works');
            // }
            
            
        });   

    
       
};


init();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// ​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// ​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// ​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// ​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```