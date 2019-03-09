const userRoutes = app => {
  app.get("/users", (req, res) => {
    res.send("all users");
  });
};

module.exports = userRoutes;
