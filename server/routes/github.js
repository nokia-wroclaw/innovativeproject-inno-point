const request = require("request");
const githubCalls = require("../services/GitHubCalls");
const config = require("../config/index");

const { getCode, getState, getToken } = require("../utils/selectors");
const crypto = require("crypto");

const Models = require("../services/dbConnection");
const User = Models.User;

const {
  client_id,
  client_secret,
  scope,
  allow_signup,
  github_url_authorize,
  github_url_token
} = config.github;

const { api, appUrl } = config;
const state = "randomState";

const github = new githubCalls();

const gitHubRoutes = app => {
  app.get("/auth", (req, res) => {
    res.redirect(
      `${github_url_authorize}?client_id=${client_id}&scope=${scope}&allow_signup=${allow_signup}&state=${state}`
    );
  });

  app.get("/auth/callback", (req, res) => {
    const code = getCode(req.url);
    const req_state = getState(req.url);
    if (req_state !== state) {
      res.state = 500;
      res.redirect(`${api}/error`);
    } else {
      const github = new githubCalls();
      //generating user token with code from github
      github.gitPostGetUserToken(code).then(
        token => {
          //here should be all database operations

          //getting user information from github || user id , user name, user email, user avatar
          github.gitGetUserIdAndInfo(token).then(
            userData => {
              const {
                clientId,
                clientName,
                clientEmail,
                clientAvatar,
                bio,
                hireable,
                public_repos
              } = userData;

              let createdNewAccount = false;

              User.findAll({
                where: { id: clientId }
              })
                .then(result => {
                  if (result.length === 0) {
                    User.bulkCreate([
                      {
                        id: clientId,
                        name: clientName,
                        github_picture: clientAvatar,
                        email: clientEmail
                      }
                    ]);
                    console.log("created new account");
                    createdNewAccount = true;
                  } else {
                    console.log("didn't create new account");
                    createdNewAccount = false;
                  }
                })
                .then(
                  () => {
                    if (createdNewAccount == true)
                      res.redirect(
                        `${appUrl}/dashboard/first_loggin?access_token=${token}&id=${clientId}&name=${
                          userData.clientName
                        }&email=${userData.clientEmail}`
                      );
                    else
                      res.redirect(
                        `${appUrl}/dashboard/projects?access_token=${token}&id=${clientId}`
                      );
                  },
                  reason => {
                    res.state = 500;
                    res.redirect(`${api}/error`);
                  }
                );
            },
            reason => {
              res.state = 500;
              res.redirect(`${api}/error`);
            }
          );
        },
        reason => {
          res.state = 500;
          res.redirect(`${api}/error`);
        }
      );
    }
  });

  app.get("/", (req, res) => {});

  app.post("/github/createRepo", (req, res) => {
    const data = {
      title: req.body.title,
      description: req.body.description
    };
    github.gitPostCreateNewRepository(data).then(
      repoData => {
        res.send("repo created" + repoData);
      },
      reason => {
        res.state = 500;
        res.send("Error");
      }
    );
  });
};

module.exports = gitHubRoutes;
