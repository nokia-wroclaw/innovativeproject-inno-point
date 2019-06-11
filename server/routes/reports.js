const jwt = require("jsonwebtoken");
const config = require("../config");

const Models = require("../services/dbConnection");
const Report = Models.Report;

const ClearanceCheck = require("../utils/cleranceCheck");
const clearanceCheck = new ClearanceCheck();

const REPORTTYPE = require("../utils/reportType");

const newsRoutes = app => {
  app.put("/report", (req, res) => {
    console.log(req.body);
    const { token } = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user_id = authData.id;
        clearanceCheck.isAdminUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            Report.findAll().then(result => {
              res.send(JSON.stringify(result));
            });
          }
        });
      }
    });
  });

  app.post("/report", (req, res) => {
    let token = req.body.token;
    console.log(req.body);

    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { message, type } = req.body.report;
        const user_id = authData.id;
        clearanceCheck.isDeveloperUp(user_id).then(result => {
          if (result == false) res.sendStatus(403);
          else {
            if (
              type == REPORTTYPE.BUG ||
              type == REPORTTYPE.FEATURE ||
              type == REPORTTYPE.FEEDBACK
            ) {
              Report.findAll({
                attributes: ["id"],
                order: [["id", "DESC"]],
                limit: 1
              }).then(result => {
                const report_id = result.row
                  ? parseInt(result.row[0].id) + 1
                  : 0;

                return Report.bulkCreate([
                  {
                    id: report_id,
                    user_id,
                    message,
                    type
                  }
                ]).then(() => res.sendStatus(200));
              });
            } else {
              console.log("Wrong type of report");
              res.sendStatus(500);
            }
          }
        });
      }
    });
  });
};

module.exports = newsRoutes;
