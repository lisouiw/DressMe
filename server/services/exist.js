let pool = require('../sql/pool')

exports.existEmail = async (email, id) => {
    return new Promise(function (resolve, reject) {
        pool()
            .then((client) => {
                client.query('SELECT * FROM users WHERE email = $1 AND id != $2', [email, id])
                    .then(res => {
                        res.rows.length === 0
                            ? resolve(true)
                            : resolve({ email: "exist" })
                    })
                    .catch(() => reject({ request: "error" }))
                    .then(() => client.end())
            })
            .catch((err) => resolve(err))
    })
}