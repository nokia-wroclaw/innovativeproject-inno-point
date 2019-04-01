const { Project, User } = require("../services/dbConnection");

const id = 1;
const testSequelizer = app => {


  app.get("/test", (req, res) => {
    //const id = parseInt(req.params.id);
    let project, members;

    Project.findAll({
      where: {
        team_id: id
      }})
      .then(result => {
        project = JSON.stringify(result);
        console.log(project);
        return User.findAll({ where: {team_id: id }});
      })
      .then(result => {
        members = JSON.stringify(result);
        console.log(members);
        res.send({ project, members });
      })
  });
};

module.exports = testSequelizer;
