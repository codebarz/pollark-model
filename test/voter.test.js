const Admin = require("../Admin/admin");
const Voter = require("../Voter/voter");

let newVoter = new Voter("tega", "123", "voter");
let newAdmin = new Admin("mike", "123", "admin");
newAdmin.createEvent("Fashion", "tosin", "mike");
newAdmin.createEvent("Food", "tolu", "mike");

describe("Voter Functionality", () => {
    test("Should check if voter can create account", () => {
        expect(newVoter.createAccount()).toEqual({ id: 1, name: 'tega', password: '123', isAdmin: false });
    });
    test("Should check if voter can vote", () => {
        expect(newVoter.vote("Fashion", "tosin", 20))
            .toEqual([ { id: 1, name: 'Fashion', contestants: [ 'tosin', 'mike' ], currentVotes: [ 20, 0 ] } ])
    });
    test("Should check if a voter can search event", () => {
        expect(newVoter.searchEvent('Food'))
            .toEqual([ { id: 2, name: 'Food', contestants: [ 'tolu', 'mike' ], currentVotes: [ 0, 0 ] } ])
    });
    test("Should check if a voter can view results", () => {
        expect(newVoter.viewResults("Fashion"))
            .toBe("Hooray! Here are the final results");
    });
});