const gitHub = require("../services/GitHubCalls");

const gitHubRoutes = app => {
    app.get("/auth/callback", (req, res) => {
        const {query} = req;

        const { code } = query;

        if(!code){
            return res.send({
                sucess: false,
                message: 'Error: no code'
            })
        }


        console.log('code', code);

    });

    app.get("/", (req, res) => {

    });
};

module.export = gitHubRoutes;