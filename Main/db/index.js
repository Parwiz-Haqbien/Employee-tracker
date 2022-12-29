const connection = require("../db/connection");

class db {
  constructor(connection, firstName, lastName, roleID, managerID) {
    this.connection = connection;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleID = roleID;
    this.managerID = managerID;
  }

  saveToDatabase() {}

  getAllEmployees() {
    return this.connection.query, this.connection, this.firstName, this.lastName, this.roleID, this.managerID;
  }
}

module.exports = db;