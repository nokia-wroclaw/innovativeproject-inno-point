const { Project, User } = require("../services/dbConnection");

const dbQuerry = require("../services/dbQuerry");
const MailService = require("../services/MailService");

const projectRoutes = app => {
  app.get("/projects", (req, res) => {
    Project.findAll().then(result => {
      res.send(JSON.stringify(result));
    })
  });

  app.get("/projects/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let project, members;
    Project.findAll({
      where: {
        id: id
      }
    })
      .then(result => {
        project = result;
        id = project.team_id;
      });
    User.findAll({
      where: {
        team_id: id
      }
    })
      .then(result => {
        members = result;
        res.send({ project, members });
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
    //    console.log(req.body.project);

    Project.findAll({
      attributes: ['id'],
      order: [['id', 'DESC']],
      limit: 1
    })
      .then(result => {
        const id = result.row ? parseInt(result.row[0].id) + 1 : 0;
        return Project.bulkCreate([{
          id: id, name: name, short_description: short_description, goals: goals, scopes: scopes,
          requirements: requirements, number_of_members: number_of_members,
          technology: technology, tags: tags, theme_color: theme_color
        }])
      })
      .then(result => {
        const mailService = new MailService();

        dbQuerry.getModeratorEmails().then(moderatorsEmails => {
          const data = {
            projectName: name,
            projectId: result.insertId,
            recipientEmails: moderatorsEmails
          };

          mailService.requestTopicReview(data).then(() => {
            //            console.log("mail sent from backend");
          });
        });

        res.send(result);
      })
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
    Project.update({
      name: name,
      short_description: short_description,
      team_id: team_id,
      goals: goals,
      scopes: scopes,
      requirements: requirements,
      mentor_id: mentor_id,
      number_of_members: number_of_members,
      technology: technology,
      academic_contact_id: academic_contact_id,
      tags: tags
    },
      { where: { id: id } })
      .then(result => {
        res.send(result);
      })
  });

  app.put("/projects/verify/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Project.update({
      verified: 1
    }, {
        where: { id: id }
      })
      .then(result => {
        res.send(result);
      });
  });

  app.delete("/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Project.destroy({
      where: { id: id }
    })
      .then(result => {
        res.send(result);
      })
  });
};

module.exports = projectRoutes;
