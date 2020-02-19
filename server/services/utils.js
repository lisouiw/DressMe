const bcrypt = require("bcrypt")
require('dotenv').config()

exports.hashedPassword = (password) => {
    return bcrypt.hashSync(password, parseInt(process.env.BCRYPT, 10));
}