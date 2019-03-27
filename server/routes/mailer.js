const MailService = require("../services/MailService");

const mailServiceRoutes = app => {
  app.get("/sendMail", (req, res) => {
    const { recipientEmail } = req.body;

    console.log(req.body);

    const mailService = new MailService();
    mailService.sendMail(recipientEmail).then(() => {
      res.send("mail sent");
    });
  });
};

module.exports = mailServiceRoutes;
