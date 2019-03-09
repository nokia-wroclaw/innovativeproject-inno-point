const express = require("express");
const cors = require("cors");

const initializeRoutes = require("./routes/index");

const app = express();
const port = 3030;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors());
app.use(express.json());

initializeRoutes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));