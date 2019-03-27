const config = {
  db: {
    host: "localhost",
    database: "inno-point",
    user: "root",
    password: "",
    socketPath: "",//"/Applications/MAMP/tmp/mysql/mysql.sock",
    port: 3306
  },
  github: {
    github_url_authorize: "https://github.com/login/oauth/authorize",
    github_url_token: "https://github.com/login/oauth/access_token",
    client_id: "cb8b7f9b4e0a03ead294",
    client_secret: "6689a1dc924d845a4296030a710eaeaadc1c60e3",
    scope: "user",
    allow_signup: "true"
  }
};

module.exports = config;
