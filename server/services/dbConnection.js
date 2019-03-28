const Sequelize = require("sequelize");
const config = require("../config").db;
const UserModel = require("../models/user");
const TeamModel = require("../models/team");
const ProjectModel = require("../models/project");

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: "mysql", 
  }
);

const User = UserModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Project = ProjectModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
  
/*close() {
  this.sequelize.close();
}*/

module.exports = { User, Team, Project };
