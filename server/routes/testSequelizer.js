const dbConnection = require("../services/dbConnection");

const testSequelizer = app => {
  app.get("/test", (req, res) => {
    const connectedDb = new dbConnection();
    res.send("ddd");
  });
};

module.exports = testSequelizer;
