"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = require("./projects");

var _projects2 = _interopRequireDefault(_projects);

var _users = require("./users");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  (0, _projects2.default)(app);
  (0, _users2.default)(app);
};