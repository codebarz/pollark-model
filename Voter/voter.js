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
    let contestantsName = db.Events.filter(value => value.name === eventName);
    let conIndex = contestantsName[0].contestants.indexOf(contestant);
    contestantsName[0].currentVotes[conIndex] = contestantsName[0].currentVotes[conIndex] + voteAmount;
    return contestantsName;
};

let newAdmin = new Admin("tega", "123", "admin");
console.log(newAdmin.createEvent("Fashion", "tolu", "mike"));

let newVoter = new Voter("mike", "123", "voter");
let voter2 = new Voter("tolu", "1", "voter");
newVoter.vote("Fashion", "mike", 10);

console.log(voter2.vote("Fashion", "tolu", 20));

module.exports = Voter;