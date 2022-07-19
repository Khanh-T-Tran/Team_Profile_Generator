// Write code to define and export the Engineer class. This class should inherit from Employee with an addition of 'github' property
// importing Employee class
const Employee = require('./Employee');

// Engineer class inherit from Employee with an addition of 'github' property
class Engineer extends Employee {
	constructor(name, id, email, github) {
		const role = 'Engineer';
		super(name, id, email, role);
		this.github = github;
	}

// returning github from input
	getGithub() {
		return this.github;
	}

	getRole() {
		return "Engineer";
	}
}

// exporting Engineer class
module.exports = Engineer;