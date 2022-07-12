// Write code to define and export the Employee class
// employee constructor
class Employee {
	constructor(name, id, email, role = 'Employee') {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}

// returning name from input
	getName() {
		return this.name;
	}

// returning ID from input
	getId() {
		return this.id;
	}

// returning email from input
	getEmail() {
		return this.email;
	}

// returning employee role
	getRole() {
		return this.role;
	}
}

// Exporting Employee class
module.exports = Employee;