const { Team, User } = require("../services/dbConnection");
const jwt = require("jsonwebtoken");
const config = require("../config");

const teamRoutes = app => {
  app.put("/teams", (req, res) => {
    const { token } = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        Team.findAll().then(result => {
          res.send(JSON.stringify(result));
        });
      }
    });
  });

  app.get("/teams/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Team.findAll({
      where: { id: id }
    }).then(result => {
      res.send(result);
    });
  });

  app.post("/teams", (req, res) => {
    const { token, open, max_number_of_members } = req.body.team;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let id;
        Team.findAll(
          { attributes: ["id"] },
          { order: [["id", "DESC"]] },
          { limit: 1 }
        )
          .then(result => {
            id = result.row ? parseInt(result.row[0].id) + 1 : 0;
            return Team.bulkCreate([
              {
                id,
                leader_id: authData.id,
                open,
                max_number_of_members,
                project_idL: null
              }
            ]);
          })
          .then(() => {
            User.update(
              { team_id: id },
              {
                where: { id: authData.id },
                truncate: { cascade: true }
              }
            );
          })
          .then(result => {
            res.send(result);
          });
      }
    });
  });
};

module.exports = teamRoutes;
