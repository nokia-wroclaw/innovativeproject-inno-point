const nodemailer = require("nodemailer");
const config = require("../config").mailer;

class MailService {
  constructor() {}

  async sendMail(recipientEmail) {
    let transporter = nodemailer.createTransport({
      host: config.mailerHost,
      port: config.mailerPort,
      secure: false,
      auth: {
        user: config.mailerAccount,
        pass: config.mailerPassword
      }
    });

    let mailOptions = {
      from: '"Test inno point noreply" <' + config.mailerAccount + ">", // sender address
      to: recipientEmail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Witam Artura?</b>" // html body
    };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
  }
}

module.exports = MailService;
