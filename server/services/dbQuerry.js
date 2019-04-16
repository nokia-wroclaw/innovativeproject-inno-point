class DBQuerry {
  constructor() {}

  static getModeratorEmails() {
    return new Promise((resolve, reject) => {
      resolve("inno.project.test@gmail.com, dominik.slawkowski@gmail.com");
    });
  }
}

module.exports = DBQuerry;
