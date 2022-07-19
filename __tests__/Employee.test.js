const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
    it('should return an employee object containing a name', () => {      
        const newEmployee = new Employee("khanh",123,"khanhiscool@gmail.com");
        expect(newEmployee.getName()).toEqual(expect.any(String)); 
    });

    it('should return an employee object containing Id number', () => {      
        const newEmployee = new Employee("khanh",123,"khanhiscool@gmail.com");
        expect(newEmployee.getId()).toEqual(expect.any(Number));
    });

    it('should return an employee object containing an email', () => {      
        const newEmployee = new Employee("khanh",123,"khanhiscool@gmail.com");
        expect(newEmployee.getEmail()).toEqual(expect.any(String));
    });

    it('should return an employee object containing an role', () => {      
        const newEmployee = new Employee("khanh",123,"khanhiscool@gmail.com");
        expect(newEmployee.getRole()).toEqual('Employee');
    });
})