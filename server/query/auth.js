const utils = require("../services/utils")
const token = require("../services/token")

const getQuery = (email) => ({
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
})

const checkAuth = (result, password) => {
    if (!utils.cmpPassword(password, result.password))
        return ({ status: 422, password: "wrong" })
    return ({ status: 200, result, token: token(result) })
}

exports.getAuth = (client, { email, password }) => {
    return new Promise(function (resolve, reject) {
        client.query(getQuery(email))
            .then((res) =>
                resolve(checkAuth(res.rows[0], password))
            )
            .catch(() => {
                reject({ status: 400, error: "request" })
            })
            .then(() => client.end())
    })
}

