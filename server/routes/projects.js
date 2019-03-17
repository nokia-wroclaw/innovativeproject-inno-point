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
      .query(`SELECT * FROM projects WHERE id = ${id}`)
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.post("/projects", (req, res) => {
    const id = Math.floor(Math.random() * 101);
    const {
      name,
      description,
      team_id,
      goals,
      scopes,
      requirements,
      mentor,
      num_of_members,
      technology,
      academic_contact,
      tags
    } = req.body.project;
    const database = new db();
    database
      .query("SELECT id FROM projects ORDER BY id DESC LIMIT 1")
      .then(result => {
        return database.query(`INSERT INTO projects(id, name, description, team_id, goals, scopes, requirements, mentor, num_of_members, technology, academic_contact, tags)
      VALUES ( ${
        result.row ? parseInt(result.row[0].id) + 1 : 0
      }, '${name}', '${description}', '${team_id}', '${goals}', '${scopes}', '${requirements}', '${mentor}', ${num_of_members}, '${technology}', '${academic_contact}', '${tags}')`);
      })
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.put("/projects/:id", (req, res) => {
    const {
      id,
      name,
      description,
      team_id,
      goals,
      scopes,
      requirements,
      mentor,
      num_of_members,
      technology,
      academic_contact,
      tags
    } = req.body;
    const database = new db();
    database
      .query(
        `UPDATE projects SET (name, description, team_id, goals, scopes, requirements, mentor, num_of_members, technology, academic_contact, tags) = ('${name}', '${description}', '${team_id}', '${goals}', '${scopes}', '${requirements}', '${mentor}', ${num_of_members}, '${technology}', '${academic_contact}', '${tags}')
        WHERE id = ${id}`
        `UPDATE projects SET(id, topic, description, team_id, goals, scopes, requirements, mentor, num_of_members, technology, academic_contact tags)
        VALUES (${id}, '${name}', '${description}', ${team_id}, '${goals}', '${scopes}', '${requirements}', ${mentor}, ${num_of_members}, '${technology}', '${academic_contact}', '${tags}')`
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
