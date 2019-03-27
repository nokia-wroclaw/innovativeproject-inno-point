const sequelize = require("sequelize");
const DBConnection = require("../services/DBConnection");

const projectRoutes = app => {
  app.get("/projects", (req, res) => {
    const database = new DBConnection();
    console.log("Coś się zrobiło przed \n");
    sequelize.query('SELECT * FROM project')          //można wykorzytać sequelize.query do wykonania zapytania surowego
      .then(project => {
        console.log(project);
        res.send(project);
      })
      .then(() => {
        database.close();
      });
      console.log("Coś się zrobiło!");

   /* database
      .query("SELECT * FROM project")
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });*/
  });

  app.get("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const database = new DBConnection();
    let project, members;

    database
      .query(`SELECT * FROM project WHERE id = ${id}`)
      .then(result => {
        project = result;
        return database.query(`SELECT * FROM user WHERE team_id = ${id}`);
      })
      .then(result => {
        members = result;
        res.send({ project, members });
      })
      .then(() => {
        database.close();
      });
  });

  app.post("/projects", (req, res) => {
    const {
      name,
      short_description,
      goals,
      scopes,
      requirements,
      number_of_members,
      technology,
      tags,
      theme_color
    } = req.body.project;
    const database = new DBConnection();
    database
      .query("SELECT id FROM project ORDER BY id DESC LIMIT 1")
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return database.query(`INSERT INTO project(id, name, short_description, goals, scopes, requirements, number_of_members, technology, tags, theme_color)
                               VALUES (${id}, '${name}', '${short_description}', '${goals}', '${scopes}', '${requirements}', ${number_of_members}, '${technology}', '${tags}', '${theme_color}')`);
      })
      .then(result => {
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });

  app.put("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {
      name,
      short_description,
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
              short_description = '${short_description}',
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
        res.send(result);
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
        res.send(result);
      })
      .then(() => {
        database.close();
      });
  });
};

module.exports = projectRoutes;
