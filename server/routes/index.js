const projectRoutes = require("./project");
const userRoutes = require("./user");
const teamRoutes = require("./team");

const initializeRoutes = app => {
  projectRoutes(app);
  userRoutes(app);
  teamRoutes(app);
};

module.exports = initializeRoutes;
