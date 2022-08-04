// All inquirer questions will be here
// Questions to prompt manager
const manager = [
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
];

// Questions to prompt engineer
const engineer = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'name'
    }
];

// Questions to prompt intern
const intern = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'name'
    }
];

// Menu to add engineer, intern, or finish building the team
const addingTeamMembers = [
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'addTeamMember',
        choices: ['Engineer', 'Intern', 'Finish building my team!']
    }
];

// Exporting all the objects
module.exports = {manager, engineer, intern, addingTeamMembers};