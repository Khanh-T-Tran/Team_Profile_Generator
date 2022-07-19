const Manager = require("../lib/Manager");

describe("testing Manager class", () => {
    it('should return an employee object containing an OfficeNumber property', () => {      
        const newManager = new Manager("khanh",123,"khanhiscool@gmail.com","whateverOfficeNumber");
        expect(newManager.getOfficeNumber()).toEqual(expect.any(String));
        expect(newManager.getRole()).toEqual("Manager");
    });
})