"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbConnection = require("../services/dbConnection.js");

var _dbConnection2 = _interopRequireDefault(_dbConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _dbConnection2.default();

exports.default = function (app) {
  app.get("/projects", function (req, res) {
    res.send("elo");

    db.query("SELECT * FROM Projects").then(function (result) {
      res.send(result);
    }).then(function () {
      return db.close();
    });
  });
};