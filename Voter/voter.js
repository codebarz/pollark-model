let db = require("../database");
let User = require("../Admin/user");

function Voter(name, password, role) {
    User.call(this, name, password);
    this.role = role;
}

Voter.prototype = Object.create(User.prototype);
Voter.prototype.constructor = Voter;

let newVoter = new Voter("tega", "123", "voter");
console.log(newVoter.createAccount());

