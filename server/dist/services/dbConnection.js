"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dbConnection = function () {
  function dbConnection() {
    _classCallCheck(this, dbConnection);

    this.connection = _mysql2.default.createConnection(_config2.default);
  }

  _createClass(dbConnection, [{
    key: "query",
    value: function query(sql, args) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.connection.query(sql, args, function (err, rows) {
          if (err) return reject(err);
          resolve(rows);
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.connection.end(function (err) {
          if (err) return reject(err);
          resolve();
        });
      });
    }
  }]);

  return dbConnection;
}();

exports.default = dbConnection;