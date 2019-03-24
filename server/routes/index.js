
const projectRoutes = require("./project");
const userRoutes = require("./user");
const teamRoutes = require("./team");
const githubRoutes = require("./github");

const initializeRoutes = app => {
  projectRoutes(app);
  userRoutes(app);
  githubRoutes(app);
  teamRoutes(app);
};

module.exports = initializeRoutes;
