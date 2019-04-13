const { Project, User, Team } = require("../services/dbConnection");

const user = {name: "Jakub", surname: "Pawłowski", team_id: 2};

const testSequelizer = app => {
  app.get("/test/:id", (req, res) => {
    const id = parseInt(req.params.id);
    User.destroy({
      where: { id: id }
    })
      .then(result => {
        res.send(result);
      })
  });
};

module.exports = testSequelizer;
