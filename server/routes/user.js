const { User } = require("../services/dbConnection");
const jwt = require("jsonwebtoken");
const config = require("../config");

const userRoutes = app => {
  app.get("/users", (req, res) => {
    User.findAll().then(result => {
      res.send(JSON.stringify(result));
    });
  });

  app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    User.findAll({
      where: { id: id }
    }).then(result => {
      res.send(result);
    });
  });

  app.post("/users", (req, res) => {
    const { name, surname } = req.body;
    User.findAll({
      attributes: ["id"],
      order: [["id", "DESC"]],
      limit: 1
    })
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return User.bulkCreate([
          {
            id: id,
            name: name,
            surname: surname
          }
        ]);
      })
      .then(result => {
        res.send(result);
      });
  });

  app.put("/user", (req, res) => {
    const { token, name, surname, email } = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { id } = authData;
        User.findAll({
          where: { id }
        }).then(result => {
          if (result.length > 0) {
            User.update(
              {
                name,
                surname,
                email
              },
              { where: { id } }
            ).then(result => {
              res.send(result);
            });
          } else {
            res.status(500).send(result);
          }
        });
      }
    });
  });

  app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, surname, team_id } = req.body;
    User.update(
      {
        name: name,
        surname: surname,
        team_id: team_id
      },
      { where: { id: id } }
    ).then(result => {
      res.send(result);
    });
  });

  app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    User.destroy({
      where: { id: id }
    }).then(result => {
      res.send(result);
    });
  });

  app.post("/users/:id", (req, res) => {
    const role = req.body;
    User.findAll({
      attributes: ["id"],
      order: [["id", "DESC"]],
      limit: 1
    })
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return User.bulkCreate([
          {
            id: id,
            role: role
          }
        ]);
      })
      .then(result => {
        res.send(result);
      });
  });

  app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const role = req.body;
    User.update(
      {
        role: role
      },
      { where: { id: id } }
    ).then(result => {
      res.send(result);
    });
  });
};

module.exports = userRoutes;
