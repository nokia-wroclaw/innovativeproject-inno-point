"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get("/projects", function (req, res) {
    res.send("all projects");
  });

  app.post("/projects", function (req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        description = _req$body.description,
        goals = _req$body.goals,
        scopes = _req$body.scopes,
        requirements = _req$body.requirements,
        mentor = _req$body.mentor,
        company = _req$body.company;

    res.send("create project with data: " + name + ", " + description + ", " + goals + ", " + scopes + ", " + requirements + ", " + mentor + ", " + company);
  });

  app.put("/projects", function (req, res) {
    var _req$body2 = req.body,
        name = _req$body2.name,
        description = _req$body2.description,
        goals = _req$body2.goals,
        scopes = _req$body2.scopes,
        requirements = _req$body2.requirements,
        mentor = _req$body2.mentor,
        company = _req$body2.company;

    res.send("update project with data: " + name + ", " + description + ", " + goals + ", " + scopes + ", " + requirements + ", " + mentor + ", " + company);
  });

  app.delete("/projects", function (req, res) {
    res.send("delete project with id = " + req.body.id);
  });
};