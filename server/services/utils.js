const bcrypt = require("bcrypt");
require("dotenv").config();

exports.hashedPassword = password => {
  return new Promise((resolve, reject) => {
    try {
      resolve(bcrypt.hashSync(password, parseInt(process.env.BCRYPT, 10)));
    } catch (err) {
      reject({ status: 503, error: "Failed Hash password" });
    }
  });
};

exports.cmpPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(bcrypt.compareSync(password, hash));
    } catch (err) {
      reject({ status: 503, error: "Failed compare password" });
    }
  });
};
