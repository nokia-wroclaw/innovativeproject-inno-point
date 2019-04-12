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

    var fs = require("fs");
    var file = fs.readFileSync(
      "C:/GIT/innovativeproject-inno-point/server/email_templates/request_mentor_status.html",
      "utf8"
    );

    //   console.log(file);

    let mailOptions = {
      from: '"Test inno point noreply" <' + config.mailerAccount + ">", // sender address
      to: "inno.project.test@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: file.toString() // html body
    };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
  }
}

module.exports = MailService;
