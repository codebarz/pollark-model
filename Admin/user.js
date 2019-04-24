let db = require("../database");
let autoincrement = require("../autoincrement");
let response = "";
function User(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
}

User.prototype.createAccount = function(id) {
    id = autoincrement(id, db.Admin);
    let userId = id;
    if(this.role === "admin") {
        db.Admin.push({id : userId, name : this.name, password : this.password, isAdmin : true});
        response = "Your admin account has been successfully created";
        return db.Admin;
    }
    else {
        db.Voters.push({id : userId, name : this.name, password : this.password, isAdmin : false});
        response = "Your user account has been successfully created";
        return db.Voters;
    }
};

module.exports = User;