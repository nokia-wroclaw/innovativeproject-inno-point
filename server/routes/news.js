const jwt = require("jsonwebtoken");
const config = require("../config");

const Models = require("../services/dbConnection");
const News = Models.News;
const Project = Models.Project;

const ClearanceCheck = require("../utils/cleranceCheck");
const clearanceCheck = new ClearanceCheck();

const newsRoutes = app => {
  app.put("/news", (req, res) => {
    const { token } = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            News.findAll().then(result => {
              res.send(JSON.stringify(result));
            });
          }
        });
      }
    });
  });

  app.post("/news", (req, res) => {
    let token = req.body.token;

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { title, body } = req.body.news;
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            News.findAll({
              attributes: ["id"],
              order: [["id", "DESC"]],
              limit: 1
            }).then(result => {
              const news_id = result.row ? parseInt(result.row[0].id) + 1 : 0;

              return News.bulkCreate([
                {
                  id: news_id,
                  title,
                  body,
                  user_id,
                  date: new Date()
                }
              ]).then(() => res.sendStatus(200));
            });
          }
        });
      }
    });
  });

  app.put("/projects/:id", (req, res) => {
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

module.exports = newsRoutes;
