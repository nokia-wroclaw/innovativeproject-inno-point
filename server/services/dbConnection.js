const Sequelize = require("sequelize");
const config = require("../config").db;
const mysql = require("mysql");
//const User = require("../models/user");

class User extends Sequelize.Model {}

class DBConnection {
  constructor() {
    //this.connection = mysql.createConnection(config); //Sequalize
    //   const { database, user, password, host } = config.db; //Zmienne do połączenia do bazy danych
    const sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      {
        //Ustanowienie połączenia do bazy danych
        host: config.host,
        dialect: "mysql", //mysql is default dialect

        pool: {
          //(Optional) only for exercise purpose
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    );

    this.initUser(sequelize);

    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch(err => {
        console.error("Unable to connect to the database:", err);
      });

    User.findAll({ attributes: ["id", "name"] }).then(users => {
      console.log("All users:", JSON.stringify(users, null, 4));
    });
  }

  initUser(sequelize) {
    User.init(
      {
        id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.CHAR(25),
          allowNull: true
        },
        surname: {
          type: Sequelize.CHAR(25),
          allowNull: true
        },
        email: {
          type: Sequelize.CHAR(50),
          allowNull: true
        },
        team_id: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: true,
          references: {
            model: "team",
            key: "id"
          }
        },
        github_id: {
          type: Sequelize.INTEGER(50),
          allowNull: true
        },
        github_picture: {
          type: Sequelize.CHAR(100),
          allowNull: true
        }
      },
      {
        sequelize
      }
    );
  }

  query(sql) {
    return new Promise((resolve, reject) => {
      sequelize.query(sql, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    this.sequelize.close();
  }
}

module.exports = DBConnection;
