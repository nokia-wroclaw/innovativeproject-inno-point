"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get("/test", function (req, res) {
    res.send("test");
  });
};