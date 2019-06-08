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
    if (req.body.team) {
      const { token, open, max_number_of_members } = req.body.team;
      jwt.verify(token, config.jwt.secretkey, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          Team.findAll(
            { attributes: ["id"] },
            { order: [["id", "DESC"]] },
            { limit: 1 }
          )
            .then(result => {
              const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
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
            .then(result => {
              User.update(
                { team_id: result[0].id },
                {
                  where: { id: authData.id }
                }
              );
            })
            .then(result => {
              res.send(result);
            });
        }
      });
    } else {
      res.sendStatus(403);
    }
  });

  app.delete("/teams/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (req.body.token) {
      const { token } = req.body;
      jwt.verify(token, config.jwt.secretkey, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          User.update({ team_id: null }, { where: { team_id: id } })
            .then(() =>
              Team.destroy({
                where: { id }
              })
            )
            .then(
              result => {
                console.log(result);
                if (result == 1) res.sendStatus("200");
                res.send(result);
              },
              () => {
                console.log("routes/teams - rejection when deleting team");
                res.sendStatus("500");
              }
            );
        }
      });
    } else {
      res.sendStatus(403);
    }
  });

  app.put("/teams/:id/join", (req, res) => {
    const id = parseInt(req.params.id);
    if (req.body.token) {
      const { token } = req.body;
      jwt.verify(token, config.jwt.secretkey, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          User.update(
            { team_id: id },
            {
              where: { id: authData.id }
            }
          ).then(() => res.sendStatus(200));
        }
      });
    } else {
      req.sendStatus(403);
    }
  });

  app.put("/teams/:id/status", (req, res) => {
    if (req.body.token) {
      const id = parseInt(req.params.id);
      const { token, status } = req.body;
      jwt.verify(token, config.jwt.secretkey, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          Team.update(
            { open: status },
            {
              where: { id }
            }
          ).then(() => res.sendStatus(200));
        }
      });
    } else {
      req.sendStatus(403);
    }
  });
};

module.exports = teamRoutes;
