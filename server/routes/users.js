export default app => {
  app.get("/users", (req, res) => {
    res.send("all users");
  });
};
