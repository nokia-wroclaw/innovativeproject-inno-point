const DBConnection = require("../services/DBConnection");

const projectRoutes = app => {
  app.get("/projects", (req, res) => {
    const database = new DBConnection();
    database
      .query("SELECT * FROM project")
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      })
      .catch(err => {
        return database.close().then(() => {
          res.send(err);
        });
      });
  });

  app.get("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const database = new DBConnection();
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
    const {
      name,
      description,
      team_id,
      goals,
      scopes,
      requirements,
      mentor_id,
      number_of_members,
      technology,
      academic_contact_id,
      tags
    } = req.body;
    console.log(req.body);
    const database = new DBConnection();
    database
      .query("SELECT id FROM project ORDER BY id DESC LIMIT 1")
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return database.query(`INSERT INTO project(id, name, description, team_id, goals, scopes, requirements, mentor_id, number_of_members, technology, academic_contact_id, tags)
                               VALUES (${id}, '${name}', '${description}', '${team_id}', '${goals}', '${scopes}', '${requirements}', '${mentor_id}', ${number_of_members}, '${technology}', '${academic_contact_id}', '${tags}')`);
      })
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      })
      .catch(err => {
        return database.close().then(() => {
          res.send(err);
        });
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
    const database = new DBConnection();
    database
      .query(
        `UPDATE projects SET (name, description, team_id, goals, scopes, requirements, mentor, num_of_members, technology, academic_contact, tags) = ('${name}', '${description}', '${team_id}', '${goals}', '${scopes}', '${requirements}', '${mentor}', ${num_of_members}, '${technology}', '${academic_contact}', '${tags}')
        WHERE id = ${id}``UPDATE projects SET(id, topic, description, team_id, goals, scopes, requirements, mentor, num_of_members, technology, academic_contact tags)
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
    const database = new DBConnection();
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
