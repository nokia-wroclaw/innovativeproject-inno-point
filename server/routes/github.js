const request = require("request");
const githubCalls = require("../services/GitHubCalls");
const config = require("../config/index");
const DBConnection = require("../services/DBConnection");

const { getCode, getState, getToken } = require("../utils/selectors");
const crypto = require("crypto");

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
      res.redirect(`${api}/error`);
    } else {
      const github = new githubCalls();
      //generating user token with code from github
      github.gitPostGetUserToken(code).then(token => {
        //here should be all database operations

        //getting user information from github || user id , user name, user email, user avatar
        github.gitGetUserIdAndInfo(token).then(userData => {
          const {
            clientId,
            clientName,
            clientEmail,
            clientAvatar,
            bio,
            hireable,
            public_repos
          } = userData;

          const database = new DBConnection();
          database
            .query(`SELECT * FROM user WHERE id = ${clientId}`)
            .then(result => {
              if (result.length === 0) {
                return database.query(`INSERT INTO user (id, name, github_picture, email) 
                               VALUES (${clientId}, '${clientName}', '${clientAvatar}', '${clientEmail}')`);
              } else {
                return database.query(
                  `UPDATE user SET name = '${clientName}', github_picture = '${clientAvatar}', email = '${clientEmail}'
                   WHERE id = ${clientId}`
                );
              }
            })
            .then(() => {
              database.close();
            })
            .then(() =>
              res.redirect(
                `${appUrl}/dashboard/projects?access_token=${token}&id=${clientId}`
              )
            );
        });
      });
    }
  });

  app.get("/", (req, res) => {});
};

module.exports = gitHubRoutes;
