var https = require('https');
var crypto = require('crypto');
 
class GitHubCalls{

    constructor(){

    }

    gitAuthWithPassword(username, password){
        let base64Auth = Buffer.from(username+":"+password).toString('base64');
        let optionsget = {
            host : 'api.github.com',
            port : 443,
            path : '/user', 
            method : 'GET', 
            headers: {'user-agent': 'node.js', 'Authorization' : 'Basic ' + base64Auth}
        };

        return new Promise((resolve, reject) => {
            let reqGet = https.request(optionsget, function(res){
                res.on('data', function(d) {
                    console.info('GET result:\n');
                    process.stdout.write(d);
                    console.info('\n\nCall completed');
                });
                resolve(res.statusCode);
            })

            reqGet.end();
            reqGet.on('error',function(e){
                reject(err);
            })
            
        });
   
    }

    gitAuthWithToken(OAuthToken){
        let optionsget = {
            host : 'api.github.com',
            port : 443,
            path : '/user', 
            method : 'GET', 
            headers: {'user-agent': 'node.js', 'Authorization' : 'token ' + OAuthToken}
        };

        return new Promise((resolve, reject) => {
            let reqGet = https.request(optionsget, function(res){
                res.on('data', function(d) {
                    console.info('GET result:\n');
                    process.stdout.write(d);
                    console.info('\n\nCall completed');
                });
                resolve(res.statusCode);
            })

            reqGet.end();
            reqGet.on('error',function(e){
                reject(err);
            })
            
        });
   
    }

    gitAuthWithCallback(callback){

        var unGuessableState = crypto.createHash('sha256');
        unGuessableState.update(Math.random().toString());

        console.log("hash: " + unGuessableState.digest());

        let optionsget = {
            host : 'github.com',
            port : 443,
            path : '/login/oauth/authorize', 
            method : 'GET', 
            headers: {'user-agent': 'node.js', 'Authorization' : 'Basic ' + base64Auth},
            client_id: 'cb8b7f9b4e0a03ead294',
            redirect_uri: callback,
            scope: '',
            state: unGuessableState,
            allow_signup: 'true'
        };


        let reqGet = https.request(optionsget, function(res){
            res.on('data', function(d) {
                console.info('GET result:\n');
                process.stdout.write(d);
                console.info('\n\nCall completed');
            });
            resolve(res.statusCode);
        })

        reqGet.end();
        reqGet.on('error',function(e){
            reject(err);
        })

        return unGuessableState;
    }

}

export default GitHubCalls;