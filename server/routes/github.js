const request = require("request");
const githubCalls = require("../services/GitHubCalls");
const config = require("../config/index").github;
const MailService = require("../services/MailService");

const { getCode, getState, getToken } = require("../utils/selectors");
const crypto = require("crypto");

const {
  client_id,
  client_secret,
  scope,
  allow_signup,
  github_url_authorize,
  github_url_token
} = config;
const state = "randomState";

const gitHubRoutes = app => {
  app.get("/auth", (req, res) => {
    const mailService = new MailService();
    mailService.sendMail(" ");

    res.redirect(
      `${github_url_authorize}?client_id=${client_id}&scope=${scope}&allow_signup=${allow_signup}&state=${state}`
    );
  });

  app.get("/auth/callback", (req, res) => {
    const code = getCode(req.url);
    const req_state = getState(req.url);

    if (req_state !== state) {
      res.redirect(`http://localhost:3000/error`);
    } else {
      const github = new githubCalls();
      //generating user token with code from github
      github.gitPostGetUserToken(code).then(token => {
        //here should be all database operations

        //getting user information from github || user id , user name, user email, user avatar
        github.gitGetUserIdAndInfo(token).then(userData => {
          res.redirect(
            `http://localhost:3000/dashboard/manager?access_token=${token}`
          );
        });
      });
    }
  });

  app.get("/", (req, res) => {});
};

module.exports = gitHubRoutes;
