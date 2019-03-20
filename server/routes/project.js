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
      goals,
      scopes,
      requirements,
      number_of_members,
      technology,
      tags
    } = req.body.project;
    const database = new DBConnection();
    database
      .query("SELECT id FROM project ORDER BY id DESC LIMIT 1")
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return database.query(`INSERT INTO project(id, name, description, goals, scopes, requirements, number_of_members, technology, tags)
                               VALUES (${id}, '${name}', '${description}', '${goals}', '${scopes}', '${requirements}', ${number_of_members}, '${technology}', '${tags}')`);
      })
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });

  app.put("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
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
    const database = new DBConnection();
    database
      .query(
        `UPDATE project SET 
              name = '${name}',
              description = '${description}',
              team_id = ${team_id},
              goals = '${goals}',
              scopes = '${scopes}',
              requirements = '${requirements}',
              mentor_id = '${mentor_id}',
              number_of_members = ${number_of_members},
              technology = '${technology}',
              academic_contact_id = ${academic_contact_id},
              tags = '${tags}'
              WHERE id = ${id}`
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
      .query(`DELETE FROM project WHERE id = ${id}`)
      .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
  });
};

module.exports = projectRoutes;
