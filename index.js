const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./assets/questions');
// const { type } = require('os');

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// prompt questions about managers
const promptManager = () => {
	return inquirer.prompt(questions.manager)
}
.then answers => {
	console.log(answers);
	const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
	teamMembers.push(manager);

}




