const projectRoutes = require("./project");
const userRoutes = require("./user");
const teamRoutes = require("./team");
const githubRoutes = require("./github");
const mailServieRoutes = require("./mailer");
const profileRoutes = require("./profile");

const initializeRoutes = app => {
  projectRoutes(app);
  userRoutes(app);
  githubRoutes(app);
  mailServieRoutes(app);
  teamRoutes(app);
  profileRoutes(app);
};

module.exports = initializeRoutes;
