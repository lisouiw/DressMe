const utils = require("../services/utils")

const getQuery = (id) => ({
    text: 'SELECT * FROM users'
})

exports.getUsers = (client, id) => {
    return new Promise(function (resolve, reject) {
        client.query(getQuery(id))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => reject({ status: 400, error: "request" }))
            .then(() => client.end())
    })
}