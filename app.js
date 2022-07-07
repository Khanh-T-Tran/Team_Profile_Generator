const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./assets/questions');
// const { type } = require('os');

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// prompt questions about managers
inquirer.prompt([
    
  	{
		type: 'input',
		message: "What is the manager's name?",
		name: 'name',
		
	},
	{
		type: 'input',
		message: "What is the manager's ID?",
		name: 'id',
		
	},
	{
		type: 'input',
		message: "What is the manager's email?",
		name: 'email',
		
	},
	{
		type: 'input',
		message: "What is the manager's office number?",
		name: 'officeNumber',
		
	},
    {
		type: 'list',
		message: 'What employee would you like to add next?',
		name: 'role',
		choices: ['Engineer', 'Intern', 'I am finished entering employees']
	}
    
])






