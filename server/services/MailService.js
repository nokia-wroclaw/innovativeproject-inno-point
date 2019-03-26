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
      from: '"Fred Foo 👻" <inno.project.test@gmail.com>', // sender address
      to: "inno.project.test@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
  }
}

module.exports = MailService;
