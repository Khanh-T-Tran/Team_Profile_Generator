const Intern = require("../lib/Intern");

describe("testing Intern class", () => {
    it('should return an employee object containing a school property', () => {      
        const newIntern = new Intern("khanh",123,"khanhiscool@gmail.com","whateverSchool");
        expect(newIntern.getSchool()).toEqual(expect.any(String));
        expect(newIntern.getRole()).toEqual("Intern");
    });
})