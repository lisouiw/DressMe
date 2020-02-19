const utils = require("../services/utils")

const getQuery = (id) => ({
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id],
})

const addQuery = ({ email, password }) => ({
    text: 'INSERT INTO USERS (email, password) \
    VALUES ($1, $2);',
    values: [email, utils.hashedPassword(password)],
})

const updateQuery = ({ id, email, password }) => ({
    text: 'UPDATE users \
             SET email = $2, password = $3 \
             WHERE id = $1;',
    values: [id, email, utils.hashedPassword(password)],
})

exports.getUser = (client, id) => {
    return new Promise(function (resolve, reject) {
        client.query(getQuery(id))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => reject({ status: 400, error: "request" }))
            .then(() => client.end())
    })
}

exports.addUser = async(client, query) => {
    return new Promise(function (resolve, reject) {
        client.query(addQuery(query))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => { reject({ status: 400, error: "request" }) })
            .then(() => client.end())
    })
}

exports.updateUser = (client, query) => {
    return new Promise(function (resolve, reject) {
        client.query(updateQuery(query))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => { reject({ status: 400, error: "request" }) })
            .then(() => client.end())
    })
}