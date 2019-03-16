const db = require("../services/dbConnection");

const userRoutes = app => {
  app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
  });

  app.get("/users", (req, res) => {
    const database = new db();
    database
      .query("SELECT * FROM users")
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new db();
    database
      .query(`SELECT * FROM users WHERE user_id = ${id}`)
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.post("/users/", (req, res) => {
    const id = Math.floor(Math.random() * 101);
    const { name, surname, user_role, team_id, git_id } = req.body;
    const database = new db();
    database
      .query(
        `INSERT INTO users (id, name, surname, user_role, team_id, git_id) 
        VALUES (${id}, ${name}, ${surname}, ${user_role}, ${team_id}, ${git_id})`
      )
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.put("/users/:id", (req, res) => {
    const { id, name, surname, user_role, team_id, git_id } = req.body;
    const database = new db();
    database
      .query(
        `INSERT INTO users (id, name, surname, user_role, team_id, git_id) 
        VALUES (${id}, ${name}, ${surname}, ${user_role}, ${team_id}, ${git_id})`
      )
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new db();
    database
      .query(`DELETE FROM users WHERE id = ${id}`)
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });
};

module.exports = userRoutes;
