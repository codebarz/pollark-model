const db = require("./database");
const User = require("./Admin/user");
const Admin = require("./Admin/admin");
const Voter = require("./Voter/voter");

let newAdmin = new Admin("John", "123", "admin");
let newVoter = new Voter("Doe", "123", "voter");

let anotherVoter = new Voter("Michael", "456", "voter");

newAdmin.createEvent("Fashion", "jane", "lorem");
newAdmin.createEvent("Food", "doe", "ipsium", "tuna");

newVoter.vote("Fashion", "jane", 30);
anotherVoter.vote("Food", "tuna", 50);
anotherVoter.vote("Fashion", "jane", 60);

newVoter.viewResults("Fashion");
newAdmin.viewResults("Food");