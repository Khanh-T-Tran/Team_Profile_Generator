// node dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// team libraries
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/Questions');
// const { resolve } = require('path');
// const Choices = require('inquirer/lib/objects/choices');

// emty array to input new team member in
const teamArray = []; 

// prompt manager
const inputManager = (type) => {
    return inquirer.prompt(questions[type]);
};

//     .then (addManager => {
//         // using Destructuring assignment to declare addManager
//         const {name, id, email, officeNumber} = addManager ;
//         const newManager = new Manager (name, id, email, officeNumber);
//         teamArray.push(newManager);
//         console.log(addManager);
//         addEmployee();
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };
// inputManager();

// const addEmployee = () => {
    
// }
    


   









