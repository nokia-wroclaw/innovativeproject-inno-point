const DBConnection = require("../services/DBConnection");

const userRoutes = app => {
  app.get("/users", (req, res) => {
    const database = new DBConnection();
    database
      .query("SELECT * FROM user")
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new DBConnection();
    database
      .query(`SELECT * FROM user WHERE id = ${id}`)
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.post("/users", (req, res) => {
    const { name, surname } = req.body;
    const database = new DBConnection();
    database
      .query("SELECT id FROM project ORDER BY id DESC LIMIT 1")
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return database.query(`INSERT INTO user (id, name, surname) 
                               VALUES (${id}, '${name}', '${surname}')`);
      })
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, surname, team_id } = req.body;
    const database = new DBConnection();
    database
      .query(
        `UPDATE user SET name = '${name}', surname = '${surname}', team_id = ${team_id}
         WHERE id = ${id}`
      )
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new DBConnection();
    database
      .query(`DELETE FROM user WHERE id = ${id}`)
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });
};

module.exports = userRoutes;
