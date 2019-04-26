let db = require("../database");
let User = require("./user");
let autoincrement = require("../autoincrement");

function Admin(name, password, role) {
    User.call(this, name, password);
    this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.createEvent = function(name, ...contestants) {
    let id = autoincrement(1, db.Events);
    let currentVotes = [];
    for(let i = 0; i < contestants.length; i++) { currentVotes.push(0); }
    (name && contestants ?
        db.Events.push({id : id, name : name, contestants : contestants, currentVotes : currentVotes})
        : console.log("Kindly fill in all details"));
    console.log("Event successfully created");
    return {id : id, name : name, contestants : contestants, currentVotes : currentVotes};
};
Admin.prototype.deleteEvent = function(eventName) {
    let indexOfEvent = db.Events.findIndex(value => value.name === eventName );
    db.Events.splice(indexOfEvent, 1);
    console.log(db.Events);
    return "Event successfully deleted";
};

module.exports = Admin;