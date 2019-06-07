const Models = require("../services/dbConnection");
const User = Models.User;
const Team = Models.Team;
const Project = Models.Project;

class DBQuerry {
  constructor() {}

  static getModeratorEmails() {
    return new Promise((resolve, reject) => {
      resolve("inno.project.test@gmail.com");
    });
  }
}

module.exports = DBQuerry;
