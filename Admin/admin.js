let db = require("../database");
let User = require("./user");
let autoincrement = require("../autoincrement");

function Admin(name, password, role) {
    User.call(this, name, password);
    this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.createEvent = function(name, voteAmount, ...contestants) {
    let id = autoincrement(1, db.Events);
    (voteAmount && name && contestants ?
        db.Events.push({id : id, name : name, voteAmount : voteAmount, contestants : contestants})
        : console.log("Kindly fill in all details"));
    console.log("Event successfully created");
    return {id : id, name : name, voteAmount : voteAmount, contestants : contestants};
};
Admin.prototype.deleteEvent = function() {
    let indexOfEvent = db.Events.findIndex(value => value.name === 'Fashion' );
    db.Events.splice(indexOfEvent, 1);
    console.log(db.Events);
    return "Event successfully deleted";
};

let newAdmin = new Admin("mike", "123", "admin");
console.log(newAdmin.createAccount());

let newAdmin2 = new Admin("mikey", "1234", "admin");
console.log(newAdmin2.createAccount());

console.log(newAdmin.createEvent("Fashion", 100, "Clothes"));
console.log(newAdmin2.createEvent("Food", 50, "Rice"));

console.log(newAdmin2.deleteEvent());

module.exports = Admin;