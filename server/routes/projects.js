import dbConnection from "../services/dbConnection.js";

const connection = new dbConnection();

export default app => {
  app.get("/projects", (req, res) => {
    connection
      .query("SELECT * FROM Projects")
      .then(result => {
        res.send(result);
      })
      .then(() => connection.close());
  });
};
