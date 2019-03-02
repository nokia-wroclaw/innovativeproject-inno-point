export default app => {
  app.get("/projects", (req, res) => {
    res.send("all projects");
  });

  app.post("/projects", (req, res) => {
    const {
      name,
      description,
      goals,
      scopes,
      requirements,
      mentor,
      company
    } = req.body;
    res.send(
      `create project with data: ${name}, ${description}, ${goals}, ${scopes}, ${requirements}, ${mentor}, ${company}`
    );
  });

  app.put("/projects", (req, res) => {
    const {
      name,
      description,
      goals,
      scopes,
      requirements,
      mentor,
      company
    } = req.body;
    res.send(
      `update project with data: ${name}, ${description}, ${goals}, ${scopes}, ${requirements}, ${mentor}, ${company}`
    );
  });

  app.delete("/projects", (req, res) => {
    res.send(`delete project with id = ${req.body.id}`);
  });
};
