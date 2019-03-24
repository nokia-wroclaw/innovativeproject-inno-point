const projectRoutes = require("./projects");
const userRoutes = require("./users");
const githubRoutes = require("./github");

const initializeRoutes = app => {
  projectRoutes(app);
  userRoutes(app);
  githubRoutes(app);
};

module.exports = initializeRoutes;
