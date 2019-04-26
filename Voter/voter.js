let db = require("../database");
let User = require("../Admin/user");
let Admin = require("../Admin/admin");

function Voter(name, password, role) {
    User.call(this, name, password);
    this.role = role;
}

Voter.prototype = Object.create(User.prototype);
Voter.prototype.constructor = Voter;

Voter.prototype.vote = function(eventName, contestant, voteAmount) {
    let theEvent = db.Events.filter(value => value.name === eventName);
    let conIndex = theEvent[0].contestants.indexOf(contestant);
    theEvent[0].currentVotes[conIndex] = theEvent[0].currentVotes[conIndex] + voteAmount;
    return theEvent;
};


let newAdmin = new Admin("tega", "123", "admin");
let newVoter = new Voter("mike", "123", "voter");
newAdmin.createEvent("Fashion", "tolu", "mike");
newAdmin.createEvent("Food", "tosin", "philip");
newVoter.vote("Fashion", "mike", 10);
newVoter.vote("Fashion", "tolu", 20);
newVoter.vote("Food", "tosin", 100);
newAdmin.viewResults('Food');

module.exports = Voter;