const config = {
  db: {
    host: "localhost",
    database: "inno-point",
    user: "root",
    password: "tosia123sl",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    port: 8889
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
  // api: "http://192.168.0.2:3030", // dom
  // appUrl: "http://192.168.0.2:3000" // dom
  // api: "http://192.168.10.117:3030", // LC
  // appUrl: "http://192.168.10.117:3000", // LC
};

module.exports = config;
