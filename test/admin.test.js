const Admin = require("../Admin/admin");

let newAdmin = new Admin("mike", "123", "admin");

describe("Create Account", () => {
    test("Should check if admin can create account", () => {
        expect(newAdmin.createAccount()).toEqual({ id: 1, name: 'mike', password: '123', isAdmin: true });
    });
    test("Should check if admin can create event", () => {
        expect(newAdmin.createEvent("Fashion", "tolu", "mike"))
            .toEqual({ id: 1, name: 'Fashion', contestants: [ 'tolu', 'mike' ], currentVotes: [0, 0] })
    });
    test("Should check if admin can delete events", () => {
        expect(newAdmin.deleteEvent("Fashion")).toBe("Event successfully deleted");
    })
});