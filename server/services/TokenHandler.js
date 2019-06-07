const Models = require("../services/dbConnection");
const User = Models.User;
const role = require("../utils/role");

const crypto = require("crypto");

class TokenHandler {
  constructor() {}

  generateToken(_role) {
    switch (_role) {
      case role.ACADEMIC: {
        return "1111111111111111111111111111111111111111";
      }
      case role.ADMIN: {
        return "5555555555555555555555555555555555555555";
      }
      case role.DEVELOPER: {
        //      console.log("generating token for dev");
        return "2222222222222222222222222222222222222222";
      }
      case role.LEADER: {
        return "3333333333333333333333333333333333333333";
      }
      case role.MENTOR: {
        return "4444444444444444444444444444444444444444";
      }
      default: {
        return "0000000000000000000000000000000000000000";
      }
    }
  }

  genToken() {
    var hash = crypto
      .createHash("sha256")
      .update(Math.random().toString())
      .digest("hex");

    console.log("generated token " + hash);
    return hash;
  }

  validate(token) {
    //   console.log("clientTOken :  " + clientToken);

    return new Promise((resolve, reject) => {
      User.findAll({
        where: { token: { token } },
        raw: true
      }).then(result => {
        let databaseUser = {
          role: "",
          id: "",
          token: ""
        };

        console.log(result);

        if (result == [] && result >= 2) {
          databaseUser.role = ROLE.ERROR;
        } else {
          databaseUser.role = JSON.parse(JSON.stringify(result[0])).role;
          databaseUser.id = JSON.parse(JSON.stringify(result[0])).id;
          databaseUser.token = JSON.parse(JSON.stringify(result[0])).token;
        }

        console.log(databaseUser);
        resolve(databaseUser);
        reject(err);
      });
    });
  }
}

module.exports = TokenHandler;
