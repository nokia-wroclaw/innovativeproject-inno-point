var https = require('https');
 
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

}

export default GitHubCalls;