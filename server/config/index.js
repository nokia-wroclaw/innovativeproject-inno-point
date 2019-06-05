const config = {
  db: {
    host: "innopoint",
    database: "inno_point",
    port: 3306,
    user: "root",
    password: "",
    socketPath: "",
    waitForConnections: true
  },
  github: {
    github_url_authorize: "https://github.com/login/oauth/authorize",
    github_url_token: "https://github.com/login/oauth/access_token",
    client_id: "cb8b7f9b4e0a03ead294",
    client_secret: "6689a1dc924d845a4296030a710eaeaadc1c60e3",
    scope: "user",
    allow_signup: "true"
  },

  mailer: {
    mailerAccount: "inno.project.test@gmail.com",
    mailerPassword: "17bc8311-f8ce-4bd6-bce6-d796b4ce5863",
    mailerHost: "smtp.elasticemail.com",
    mailerPort: "2525",
    request_mentor_status: "../email_templates/request_mentro_status.html"
  },

  api: "http://localhost:3030",
  appUrl: "http://localhost:3000"
};

module.exports = config;