const Models = require("../services/dbConnection");
const User = Models.User;
const role = require("../utils/role");

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
    var unGuessableState = crypto.createHash("sha256");
    unGuessableState.update(Math.random().toString());
    console.log("unguessable state: " + unGuessableState);
    return unGuessableState;
  }

  getRoleFromToken(clientToken) {
    User.findAll({
      attributes: ["role"],
      where: { token: clientToken },
      raw: true,
      limit: 1
    }).then(result => {
      if (result === 0) {
        return ROLE.ERROR;
      } else {
        let databaseUserRole = JSON.parse(JSON.stringify(result[0])).role;
        //  console.log(result);
        return databaseUserRole;
      }
    });
  }
}

module.exports = TokenHandler;
