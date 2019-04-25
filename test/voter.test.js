let db = require("../database");
let Voter = require("../Voter/voter");

let newVoter = new Voter("tega", "123", "voter");

describe("Voter Functionality", () => {
    test("Should check if voter can create account", () => {
        expect(newVoter.createAccount()).toEqual({ id: 1, name: 'tega', password: '123', isAdmin: false });
    });
});