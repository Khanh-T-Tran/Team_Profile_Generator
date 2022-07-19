// Write code to define and export the Intern class.
const Employee = require('./Employee');

// Intern class inherit from Employee with an addition of 'school' property
class Intern extends Employee {
	constructor(name, id, email, school) {
		const role = 'Intern';
		super(name, id, email, role);
		this.school = school;
	}

	// returning school from input
	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}
}

// exporting Intern class
module.exports = Intern;