let db = require("../database");
let User = require("./user");

function Admin(name, password, role) {
    User.call(this, name, password);
    this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

module.exports = Admin;