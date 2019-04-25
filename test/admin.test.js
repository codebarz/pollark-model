let db = require("../database");
let User = require("../Admin/user");
let Admin = require("../Admin/admin");
let autoincrement = require("../autoincrement");

let newAdmin = new Admin("mike", "123", "admin");

describe("Create Account", () => {
    test("Should check if admin can create account", () => {
        expect(newAdmin.createAccount()).toEqual({ id: 1, name: 'mike', password: '123', isAdmin: true });
    });
    test("Should check if admin can create event", () => {
        expect(newAdmin.createEvent("Fashion", 100, "tolu", "mike"))
            .toEqual({ id: 1, name: 'Fashion', voteAmount: 100, contestants: [ 'tolu', 'mike' ] })
    });
});