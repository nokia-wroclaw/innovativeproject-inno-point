const db = require("../services/dbConnection");

const projectRoutes = app => {
  app.get("/projects", (req, res) => {
    const database = new db();
    database
      .query("SELECT * FROM projects")
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.get("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const database = new db();
    database
      .query(`SELECT * FROM projects WHERE project_id = ${id}`)
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.post("/projects", (req, res) => {
    const {
      project_id,
      topic,
      description,
      team_id,
      goals,
      scopes,
      requirements,
      mentor,
      company,
      num_of_members,
      technology,
      tags
    } = req.body;
    const database = new db();
    database
      .query(
        `INSERT INTO projects(project_id, topic, description, team_id, goals, scopes, requirements, mentor, company, num_of_members, technology, tags)
        VALUES (${project_id},${topic}, ${description}, ${team_id}, ${goals}, ${scopes}, ${requirements}, ${mentor}, ${company}, ${num_of_members}, ${technology}, ${tags})`
      )
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.put("/projects/:id", (req, res) => {
    const {
      project_id,
      topic,
      description,
      team_id,
      goals,
      scopes,
      requirements,
      mentor,
      company,
      num_of_members,
      technology,
      tags
    } = req.body;
    const database = new db();
    database
      .query(
        `UPDATE projects SET(project_id, topic, description, team_id, goals, scopes, requirements, mentor, company, num_of_members, technology, tags)
        VALUES (${project_id},${topic}, ${description}, ${team_id}, ${goals}, ${scopes}, ${requirements}, ${mentor}, ${company}, ${num_of_members}, ${technology}, ${tags})`
      )
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.delete("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new db();
    database
      .query(`DELETE FROM projects WHERE id = ${id}`)
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });
};

module.exports = projectRoutes;
