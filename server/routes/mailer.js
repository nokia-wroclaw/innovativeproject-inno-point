const MailService = require("../services/MailService");
const DBConnection = require("../services/DBConnection");

const mailServiceRoutes = app => {
  app.put("/sendMail/requestMentorStatus", (req, res) => {
    //    console.log(req.body);

    const token = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { id } = authData;
        clearanceCheck.isDeveloperUp(id).then(result => {
          if (result == false) res.sets(403);
          else {
            const mailService = new MailService();
            const DB = new DBConnection();

            DB.getModeratorEmails().then(moderatorsEmails => {
              const data = {
                userName: req.body.userName,
                userId: req.body.userId,
                recipientEmails: moderatorsEmails
              };

              mailService.requestMentorStatus(data).then(() => {
                res.send("mail sent");
              });
            });
          }
        });
      }
    });
  });

  app.put("/sendMail/requestNewTopic", (req, res) => {
    //    console.log(req.body);

    const mailService = new MailService();
    const DB = new DBConnection();

    const token = req.body;
    jwt.verify(token, config.jwt.secretkey, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { id } = authData;
        clearanceCheck.isDeveloperUp(id).then(result => {
          if (result == false) res.sets(403);
          else {
            DB.getModeratorEmails().then(moderatorsEmails => {
              const data = {
                projectName: req.body.projectName,
                projectId: req.body.projectId,
                recipientEmails: moderatorsEmails
              };

              mailService.requestTopicReview(data).then(() => {
                res.send("mail sent");
              });
            });
          }
        });
      }
    });
  });
};

module.exports = mailServiceRoutes;
