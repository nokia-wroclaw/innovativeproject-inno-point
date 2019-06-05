const { Team } = require("../services/dbConnection");

const teamRoutes = app => {
  app.get("/teams", (req, res) => {
    Team.findAll().then(result => {
      res.send(JSON.stringify(result));
    })
  });

  app.get("/teams/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Team.findAll({
      where: { id: id }
    })
      .then(result => {
        res.send(result);
      })
  });

  app.post("/teams", (req, res) => {
    const { leader_id } = req.body;
    Team.findAll(
      { attributes: ['id'] },
      { order: [['id', 'DESC']] },
      { limit: 1 })
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return Team.bulkCreate([{ id: id, leader_id: leader_id }])
      })
      .then(result => {
        res.send(result);
      })
  });
};

module.exports = teamRoutes;
