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
console.log(newAdmin.createEvent("Fashion", "tolu", "mike"));

let newVoter = new Voter("mike", "123", "voter");
let voter2 = new Voter("tolu", "1", "voter");
newVoter.vote("Fashion", "mike", 10);

console.log(voter2.vote("Fashion", "tolu", 20));

module.exports = Voter;