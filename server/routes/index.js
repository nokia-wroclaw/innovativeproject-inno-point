const projectRoutes = require("./projects");
const userRoutes = require("./users");

const initializeRoutes = app => {
  projectRoutes(app);
  userRoutes(app);
};

module.exports = initializeRoutes;
