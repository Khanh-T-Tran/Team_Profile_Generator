const Engineer = require("../lib/Engineer");

describe("testing engineer class", () => {
    it('should return an employee object containing github link', () => {      
        const newEngineer = new Engineer("khanh",123,"khanhiscool@gmail.com","github@gihub.com");
        expect(newEngineer.getGithub()).toEqual(expect.any(String));
        expect(newEngineer.getRole()).toEqual("Engineer");
    });
})