const MailService = require("../services/MailService");

const mailServiceRoutes = app => {
  app.get("/sendMail", (req, res) => {
    const mailService = new MailService();
    mailService.sendMail(" ");
  });
};

module.exports = mailServiceRoutes;
