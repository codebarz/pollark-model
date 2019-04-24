let db = require("./database");
function autoIncrement(id, table) {
    id = 1;
    this.table = table;

    return (!this.table.length ? id : (this.table[this.table.length - 1].id) + 1);
}