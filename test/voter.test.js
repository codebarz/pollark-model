let db = require("../database");
let Admin = require("../Admin/admin");
let Voter = require("../Voter/voter");

let newVoter = new Voter("tega", "123", "voter");
let newAdmin = new Admin("mike", "123", "admin");
newAdmin.createEvent("Fashion", "tolu", "mike");

describe("Voter Functionality", () => {
    test("Should check if voter can create account", () => {
        expect(newVoter.createAccount()).toEqual({ id: 1, name: 'tega', password: '123', isAdmin: false });
    });
    test("Should check if voter can vote", () => {
        expect(newVoter.vote("Fashion", "tolu", 20))
            .toEqual([ { id: 1, name: 'Fashion', contestants: [ 'tolu', 'mike' ], currentVotes: [ 20, 0 ] } ])
    });
});