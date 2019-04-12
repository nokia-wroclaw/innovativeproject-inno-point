const config = {
  // db: {
  //   // remote
  //   host: "mydatabase.cbcpl7nwu3lo.us-east-1.rds.amazonaws.com",
  //   database: "inno_point",
  //   port: 3306,
  //   user: "admin",
  //   password: "databaseinnopoint",
  //   socketPath: "",
  //   waitForConnections: true
  // },
  db: {
    host: "localhost",
    database: "inno-point",
    port: 8889,
    user: "root",
    password: "tosia123sl",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
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
  api: "http://localhost:3030",
  appUrl: "http://localhost:3000"
};

module.exports = config;
