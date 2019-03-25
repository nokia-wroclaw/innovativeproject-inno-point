const request = require("request");
const config = require("../config/index").github;

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
      request.post(
        `${github_url_token}?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
        (error, response, body) => {
          const token = getToken(req._parsedOriginalUrl.query);

          // Sprawdzamy czy w bazie jest juz uzytkownik

          res.redirect(
            `http://localhost:3000/dashboard/manager?access_token=${token}`
          );
        }
      );
    }
  });

  app.get("/", (req, res) => {});
};

module.exports = gitHubRoutes;
