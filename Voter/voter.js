let db = require("../database");
let User = require("../Admin/user");

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
Voter.prototype.viewResults = function(eventName) {
    return `${eventName} thanks you for voting
    ${User.prototype.viewResults(eventName)}`;
};

module.exports = Voter;