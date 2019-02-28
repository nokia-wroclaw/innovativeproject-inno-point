"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3030;

app.use((0, _cors2.default)());
app.use(_express2.default.json());

(0, _index2.default)(app);

app.listen(port, function () {
  return console.log("App listening on port " + port);
});