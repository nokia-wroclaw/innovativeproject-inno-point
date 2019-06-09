const jwt = require("jsonwebtoken");
const config = require("../config");

const Models = require("../services/dbConnection");
const User = Models.User;
const Team = Models.Team;
const Project = Models.Project;
const sequelize = Models.sequelize;

const dbQuerry = require("../services/dbQuerry");
const MailService = require("../services/MailService");

const ClearanceCheck = require("../utils/cleranceCheck");
const clearanceCheck = new ClearanceCheck();

const projectRoutes = app => {
  app.put("/projects", (req, res) => {
    const { token } = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Project.findAll().then(result => {
              res.send(JSON.stringify(result));
            });
          }
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
    let token = req.body.token;
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

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Project.findAll({
              attributes: ["id"],
              order: [["id", "DESC"]],
              limit: 1
            })
              .then(result => {
                const project_id = result.row
                  ? parseInt(result.row[0].id) + 1
                  : 0;

                return Project.bulkCreate([
                  {
                    id: project_id,
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
          }
        });
      }
    });
  });

  app.put("/take", (req, res) => {
    console.log("we are in take");
    console.log(req.body);
    let token = req.body.token;
    console.log(req.params);
    // const project_id = parseInt(req.params.id);
    const project_id = 152;

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isLeaderUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Project.findAll({ where: { id: project_id } })
              .then(result => {
                const project_max_users =
                  result[0].dataValues.number_of_members;
                if (JSON.stringify(result[0].dataValues.team_id) == "null") {
                  User.findAll({ where: { id: user_id } }).then(result => {
                    const team_id = result[0].dataValues.team_id;
                    User.findAll({ where: { team_id: team_id } }).then(
                      result => {
                        sequelize
                          .query(
                            "SELECT COUNT(max_number_of_members) as current_num_of_members, max_number_of_members FROM user JOIN team ON user.team_id = team.id WHERE team_id='" +
                              team_id +
                              "'"
                          )
                          .then(([results, metadata]) => {
                            const num_team_members =
                              results[0].current_num_of_members;
                            if (num_team_members == project_max_users) {
                              Team.update(
                                { project_id: project_id },
                                {
                                  where: { id: team_id }
                                }
                              )
                                .then(result => {
                                  Project.update(
                                    { team_id: team_id },
                                    { where: { id: project_id } }
                                  );
                                })
                                .then(() => {
                                  res.sendStatus(200);
                                });
                            } else {
                              console.log(
                                "too many or too little members in team"
                              );
                              res.sendStatus(500);
                            }
                          });
                      }
                    );
                  });
                } else {
                  console.log("project is taken");
                  res.sendStatus(500);
                }
              })
              .catch(error => {
                console.log(error);
                res.sendStatus("500");
              });
          }
        });
      }
    });
  });

  app.put("/projects/:id", (req, res) => {
    console.log(req.body);
    let token = req.body.token;
    const {
      academic_contact_id,
      goals,
      long_description,
      mentor_id,
      name,
      number_of_members,
      requirements,
      scopes,
      short_description,
      tags,
      team_id,
      technology,
      theme_color
    } = req.body.project;

    const project_id = parseInt(req.params.id);

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Project.update(
              {
                name,
                short_description,
                long_description,
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
              { where: { id: project_id } }
            )
              .then(result => {
                res.status(200).send(result);
              })
              .catch(error => {
                console.log(error);
                res.sendStatus("500");
              });
          }
        });
      }
    });
  });

  app.put("/projects/verify/:id", (req, res) => {
    let token = req.body.token;
    const project_id = parseInt(req.params.id);

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Project.update(
              {
                verified: 1
              },
              {
                where: { id: project_id }
              }
            )
              .then(result => {
                if (result == 1) res.sendStatus(200);
                else res.sendStatus(500);
              })
              .catch(error => {
                console.log(
                  "routes/project - rejection when updating verify status"
                );
                res.sendStatus("500");
              });
          }
        });
      }
    });
  });

  app.delete("/projects/:id", (req, res) => {
    let token = req.body.token;
    const project_id = parseInt(req.params.id);

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Project.destroy({
              where: { id: project_id }
            })
              .then(result => {
                if (result == 1) res.sendStatus(200);
                else res.sendStatus(500);
              })
              .catch(error => {
                console.log("routes/project - rejection when deleting project");
                res.sendStatus("500");
              });
          }
        });
      }
    });
  });
};

module.exports = projectRoutes;
