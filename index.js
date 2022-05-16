const fs = require('fs'); 
const inquirer = require('inquirer');

const Engineer = require('./team/Engineer');
const Intern = require('./team/Intern');
const Manager = require('./team/Manager');

const generateHTML = require('./src/generateHTML');

const profilesArray = []; 

const init = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("What is the manager's name?");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("What is the manager's ID number?")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is their office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('What is their office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        profilesArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    Adding employees to the team
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is your employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("What is the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('What is their email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("What is the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("What is the intern's school?")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more employees to the team?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        profilesArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(profilesArray); 
        } else {
            return profilesArray;
        }
    })

};

init()
  .then(addEmployee)
  .then((profilesArray) => fs.writeFileSync('./dist/index.html', generateHTML(profilesArray)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch(err => {
 console.log(err);
  });