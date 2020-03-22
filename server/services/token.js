require('dotenv').config()
const jwt = require('jsonwebtoken');

const token = (obj)=> {
   return jwt.sign(obj, process.env.TOKEN_KEY);
}

module.exports = token