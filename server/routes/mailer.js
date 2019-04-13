const MailService = require("../services/MailService");
const DBConnection = require("../services/DBConnection");

const mailServiceRoutes = app => {
  app.get("/sendMail/newTopic", (req, res) => {
    //  const { projectName, projectId } = req.body.project;

    const database = new DBConnection();
    const mailService = new MailService();

    const data = {
      projectName: "XXX",
      projectId: "34",
      recipientEmail: "a"
    };

    console.log(req.body);

    mailService.sendTopicReviewRequest(data).then(() => {
      res.send("mail sent");
    });
  });
};

module.exports = mailServiceRoutes;
