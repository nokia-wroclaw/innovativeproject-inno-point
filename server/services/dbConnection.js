const config = require("../config");
const Pool = require("pg").Pool;

class dbConnection {
  constructor() {
    this.connection = new Pool(config);
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

module.exports = dbConnection;
