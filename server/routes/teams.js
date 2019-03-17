const db = require("../services/dbConnection");

const teamRoutes = app => {
    app.get("/teams", (req, res) => {
        const database = new db();
        database
        .query("SELECT * FROM teams")
        .then(result => {
            res.send(result.rows)
        })
        .then(() => {
            database.close();
        });
    });

    app.get("/teams/:id", (req, res) => {
        const id = parseInt(req.params.id);
    
        const database = new db();
        database
          .query(`SELECT * FROM teams WHERE team_id = ${id}`)
          .then(result => {
            res.send(result.rows);
          })
          .then(() => {
            database.close();
          });
      }); 

    app.post("/teams", (req, res) => {
    const id = Math.floor(Math.random()*10001);
    const {
        leader,
        members,
        num_of_members
    } = req.body;

    const database = new db();
    database
    .query(
        `INSERT INTO teams(team_id, leader, members, num_of_members)
        VALUES ('${id}','${leader}','${members}','${num_of_members}')`
    )
    .then(result => {
        res.send(result.rows);
      })
      .then(() => {
        database.close();
      });
    });



}


module.exports = projectRoutes;