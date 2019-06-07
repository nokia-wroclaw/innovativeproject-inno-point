const jwt = require("jsonwebtoken");
const config = require("../config");

const Models = require("../services/dbConnection");
const User = Models.User;
const Project = Models.Project;

const dbQuerry = require("../services/dbQuerry");
const MailService = require("../services/MailService");

const projectRoutes = app => {
  app.put("/projects", (req, res) => {
    const { token } = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        Project.findAll().then(result => {
          res.send(JSON.stringify(result));
        });
      }
    });
  });

  app.get("/projects/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let project, members;
    Project.findAll({
      where: {
        id: id
      }
    }).then(result => {
      project = result;
      id = project.team_id;
    });
    User.findAll({
      where: {
        team_id: id
      }
    }).then(
      result => {
        members = result;
        res.send({ project, members });
      },
      reason => {
        res.state = 500;
        res.redirect(`${api}/error`);
      }
    );
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

    Project.findAll({
      attributes: ["id"],
      order: [["id", "DESC"]],
      limit: 1
    })
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return Project.bulkCreate([
          {
            id: id,
            name: name,
            short_description: short_description,
            goals: goals,
            scopes: scopes,
            requirements: requirements,
            number_of_members: number_of_members,
            technology: technology,
            tags: tags,
            theme_color: theme_color
          }
        ]);
      })
      .then(
        result => {
          const mailService = new MailService();
          dbQuerry.getModeratorEmails().then(moderatorsEmails => {
            const data = {
              projectName: name,
              projectId: result.insertId,
              recipientEmails: moderatorsEmails
            };
            mailService.requestTopicReview(data).then(() => {});
          });
          if (result == 1) res.sendStatus("200");
          res.send(result);
        },
        reason => {
          console.log("routes/project - rejection when adding project");
          res.sendStatus("500");
        }
      );
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
    } = req.body.project;

    Project.update(
      {
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
      },
      { where: { id } }
    )
      .then(result => {
        res.status("200").send(result);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus("500");
      });
  });

  app.put("/projects/verify/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Project.update(
      {
        verified: 1
      },
      {
        where: { id: id }
      }
    ).then(
      result => {
        if (result == 1) res.sendStatus("200");
        res.send(result);
      },
      reason => {
        console.log("routes/project - rejection when updating verify status");
        res.sendStatus("500");
      }
    );
  });

  app.delete("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Project.destroy({
      where: { id: id }
    }).then(
      result => {
        console.log(result);
        if (result == 1) res.sendStatus("200");
        res.send(result);
      },
      reason => {
        console.log("routes/project - rejection when deleting project");
        res.sendStatus("500");
      }
    );
  });
};

module.exports = projectRoutes;
