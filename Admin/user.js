let db = require("../database");
let autoincrement = require("../autoincrement");
let response = "";

function User(name, password) {
    this.name = name;
    this.password = password;
}

User.prototype.createAccount = function(id) {
    id = autoincrement(id, db.Admin);
    let userId = id;
    if(this.role === "admin") {
        db.Admin.push({id : userId, name : this.name, password : this.password, isAdmin : true});
        response = "Your admin account has been successfully created";
        return {id : userId, name : this.name, password : this.password, isAdmin : true};
    }
    db.Voters.push({id : userId, name : this.name, password : this.password, isAdmin : false});
    response = "Your user account has been successfully created";
    return {id : userId, name : this.name, password : this.password, isAdmin : false};
};
User.prototype.searchEvent = function(event) {
    return db.Events.filter(value => value.name === event);
};
User.prototype.viewResults = function(eventName) {
    let theEvent = User.prototype.searchEvent(eventName);
    let contestants = theEvent[0].contestants, votes = theEvent[0].currentVotes;
    contestants.forEach((name, vote) => {
        console.log(`${name} : ${votes[vote]}`);
    });
    return "Hooray! Here are the final results";
};

module.exports = User;