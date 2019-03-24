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
    const { leader_id } = req.body;

    const database = new DBConnection();
    database
      .query("SELECT id FROM team ORDER BY id DESC LIMIT 1")
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return database.query(
          `INSERT INTO team(id)
           VALUES (${id})`
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
