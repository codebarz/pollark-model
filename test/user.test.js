let db = require("../database");
let User = require("../Admin/user");
let autoincrement = require("../autoincrement");

let newUser = new User("oke", "123");

describe("External functions", () => {
    test("Should check if ID auto increments on empty database", () => {
        expect(autoincrement(1, [])).toEqual(1);
    });
});


describe("Should check all user functionality", () => {
    test("Should check if new instances of User can be created", () => {
        expect(newUser).toEqual( { name: 'oke', password: '123' });
    });
});