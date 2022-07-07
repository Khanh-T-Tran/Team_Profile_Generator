// inquirer questions

const manager = [
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
		
	}
];

const engineer = [
	{
		type: 'input',
		message: "What is the engineer's name?",
		name: 'name',
		
	},
	{
		type: 'input',
		message: "What is the engineer's ID?",
		name: 'id',
		
	},
	{
		type: 'input',
		message: "What is the engineer's email?",
		name: 'email',
		
	},
	{
		type: 'input',
		message: "What is the engineer's GitHub username?",
		name: 'github',
		
	}
];

const intern = [
	{
		type: 'input',
		message: "What is the intern's name?",
		name: 'name',
		
	},
	{
		type: 'input',
		message: "What is the intern's ID?",
		name: 'id',
		
	},
	{
		type: 'input',
		message: "What is the intern's email?",
		name: 'email',
		
	},
	{
		type: 'input',
		message: "What is the intern's school?",
		name: 'school',
		
	}
];

module.exports = { manager, engineer, intern};