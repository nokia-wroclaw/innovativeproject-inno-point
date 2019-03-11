const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const initializeRoutes = require("./routes/index");
const app = express();
const db = require("./services/dbConnection");
const port = 3030;


/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
*/
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.delete('/users/:id', db.deleteUser)


app.use(cors());
app.use(express.json());

initializeRoutes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));

