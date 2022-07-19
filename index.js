// node dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// team libraries
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { resolve } = require('path');
const Choices = require('inquirer/lib/objects/choices');

// emty array to input new team member in
const teamArray = []; 

// prompt manager
const inputManager =   inquirer.prompt ([
        {
            type: 'input',
		    message: "What is the manager's name?",
		    name: 'name'
        },
        {
            type: 'input',
		    message: "What is the manager's ID?",
		    name: 'id'
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'email'
        },
        {
            type: 'input',
		    message: "What is the manager's office number?",
		    name: 'officeNumber'
        }
        
    ])
    .then (addManager => {
        const {name, id, email, officeNumber} = addManager ;
        const newManager = new Manager (name, id, email, officeNumber);
        teamArray.push(newManager);
        console.log(newManager);
        // addEmployee()
    });

function addEmployee () {
    return inquirer.prompt([
        {
            message: 'Please choose a role to add!',
            choices: ['Engineer', 'Intern', 'finish adding employee']
        }
       
    ])
    
}
    // const inputEngineer inquirer
    // const inputIntern inquirer\
    


   









