const utils = require("../utils");

exports.addUser = async (arg,) => {
  return new Promise(async (resolve, reject) => {
    await utils
      .hashedPassword(password)
      .then(e => {
        console.log("================================")
        console.log({ password: e, ...args });
        resolve({ password: e, ...args });
      })
      .catch(err => reject(err));
  });
};
