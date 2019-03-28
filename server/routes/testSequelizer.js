const { User, Team, Project } = require("../services/dbConnection");

const testSequelizer = app => {
  app.get("/test", (req, res) => {
    res.send("ddd");
    Project.findAll().then(users => {
      console.log("All projects:", JSON.stringify(users, null, 4));
    });
  });
};

module.exports = testSequelizer;
