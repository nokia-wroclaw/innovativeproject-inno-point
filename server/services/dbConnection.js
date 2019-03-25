const sequelize = require("sequelize");
const config = require("../config").db;
const mysql = require("mysql");

class DBConnection {
  constructor() {
    //this.connection = mysql.createConnection(config); //Sequalize
    const { database, user, password, host } = config.db;
    this.connection = new sequelize.Sequelize(`${database}`, `${user}`, `${password}`, {
      host: `${host}`,
      dialect: 'mysql',
    });

    this.connection.authenticate()
      .then( () => console.log('Database connected...'))
      .catch(err => console.log("Error: " + err))
  }
  query(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

module.exports = DBConnection;
