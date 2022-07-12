const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
    it('should return an employee object containing name', () => {      
        const newEmployee = new Employee("khanh");
        expect(newEmployee.getName()).toEqual(expect.any(String));
    });

    it('should return an employee object containing Id number', () => {      
        const newEmployeeId = 123;
        expect(newEmployee.getId()).toEqual(expect.any(Number));
    });

    it('should return an employee object containing email', () => {      
        const newEmployee = new Employee("khanhiscool@gmail.com");
        expect(newEmployee.getEmail()).toEqual(expect.any(String));
    });
})