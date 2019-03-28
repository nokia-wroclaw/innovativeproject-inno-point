const projectRoutes = require("./project");
const userRoutes = require("./user");
const teamRoutes = require("./team");
const githubRoutes = require("./github");
const testRoutes = require("./testSequelizer");

const initializeRoutes = app => {
  projectRoutes(app);
  userRoutes(app);
  githubRoutes(app);
  teamRoutes(app);
  testRoutes(app);
};

module.exports = initializeRoutes;
