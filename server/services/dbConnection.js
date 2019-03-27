const sequelize = require("sequelize");
const config = require("../config").db;
const mysql = require("mysql");

class DBConnection {
  constructor() {
    //this.connection = mysql.createConnection(config); //Sequalize
    const { database, user, password, host } = config.db;       //Zmienne do połączenia do bazy danych 
    this.connection = new sequelize.Sequelize(`${database}`, `${user}`, `${password}`, {    //Ustanowienie połączenia do bazy danych
      host: `${host}`,
      dialect: 'mysql',       //mysql is default dialect

      pool : {                //(Optional) only for exercise purpose
        max :  5 ,
        min :  0 ,
        idle :  10000
      },
    });

    this.connection.authenticate().complete( (err) => {                   //Weryfikacja połączenia, wypisanie błędu połączenia
      if (err) {
        console.log('There is conection in ERROR, Error number: ' + err );
      } else {
        console.log('Connection has been established successfully. ');
      }
    });
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
      this.connection.close(err => {            //Zamknięcie połączenia 
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

module.exports = DBConnection;
