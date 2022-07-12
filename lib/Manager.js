// Write code to define and export the Manager class. This class should inherit from Employee with an addition of 'officeNumber' property
const Employee = require('./Employee');

// Manager class inherit from Employee with an addition of 'officeNumber' property
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		const role = 'Manager';
		super(name, id, email, role);
		this.officeNumber = officeNumber;
	}

// returning officeNumber from input
	getOfficeNumber() {
		return this.officeNumber;
	}
}

// exporting Manager class
module.exports = Manager;