const { User } = require("../services/dbConnection");

const profileRoutes = app => {
    app.get("/profile/:id", (req, res) => {
        const id = parseInt(req.params.id);
    User.findAll({
      where: { id: id }
    })
      .then(result => {
        res.send(result);
      })
    });

    app.delete("profile/:id", (req, res) => {
        const id = parseInt(req.params.id);
        User.destroy({
        where: { id: id }
        })
         .then(result => {
            res.send(result);
        })
    });
};

module.exports = profileRoutes;