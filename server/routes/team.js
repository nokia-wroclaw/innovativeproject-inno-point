const DBConnection = require("../services/DBConnection");

const teamRoutes = app => {
  app.get("/teams", (req, res) => {
    const database = new DBConnection();
    database
      .query("SELECT * FROM team")
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.get("/teams/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new DBConnection();
    database
      .query(`SELECT * FROM team WHERE id = ${id}`)
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.post("/teams", (req, res) => {
    const { leader_id, open } = req.body.team;
    let team_id;
    const database = new DBConnection();
    database
      .query("SELECT id FROM team ORDER BY id DESC LIMIT 1")
      .then(result => {
        console.log(JSON.stringify(result));
        team_id = result[0].id + 1;
        return database.query(
          `INSERT INTO team(id, leader_id, open)
           VALUES (${team_id}, ${leader_id}, ${open ? "1" : "0"})`
        );
      })
      .then(() => {
        console.log(team_id, leader_id);
        return database.query(
          `UPDATE user SET team_id = ${team_id}
           WHERE id = ${leader_id}`
        );
      })
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });
};

module.exports = teamRoutes;
