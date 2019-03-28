const { User, Team, Project } = require("../services/dbConnection");

const testSequelizer = app => {
  app.get("/test", (req, res) => {
    res.send("ddd");
    Project.findAll({ attributes: ["id", "name"] }).then(users => {
      console.log("All users:", JSON.stringify(users, null, 4));
    });
  });
};

module.exports = testSequelizer;
