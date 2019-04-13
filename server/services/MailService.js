const nodemailer = require("nodemailer");
const config = require("../config").mailer;
const mustache = require("mustache");

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

  async sendTopicReviewRequest(data) {
    let transporter = nodemailer.createTransport({
      host: config.mailerHost,
      port: config.mailerPort,
      secure: false,
      auth: {
        user: config.mailerAccount,
        pass: config.mailerPassword
      }
    });

    console.log("util data :" + JSON.stringify(data));

    var fs = require("fs");
    var file = fs.readFileSync(
      "C:/GIT/innovativeproject-inno-point/server/email_templates/requestTopicReview.html",
      "utf8"
    );

    //   console.log(file);

    var demoData = {
      projectName: data.projectName,
      projectId: data.projectId
    };

    var processedHTML = mustache.to_html(file, demoData); // replace all of the data

    let mailOptions = {
      from: '"Test inno point noreply" <' + config.mailerAccount + ">", // sender address
      to: "inno.project.test@gmail.com", // list of receivers
      subject: "New topic review request", // Subject line
      text: "", // plain text body
      html: processedHTML // html body
    };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
  }
}

module.exports = MailService;
