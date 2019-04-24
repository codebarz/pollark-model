let db = require("../database");
let autoincrement = require("../autoincrement");
let response = "";
function User(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
}

User.prototype.createAccount = function(id) {
    if(this.role === "admin") {
        id = autoincrement(id, db.Admin);
        db.Admin.push({id : id, name : this.name, password : this.password, role : this.role});
        response = "Your account has been successfully created";
    }
    console.log(response);
    return db.Admin;
};

module.exports = User;
