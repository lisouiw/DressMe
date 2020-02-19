const Pool = require('pg').Pool
const config = {
    user: 'root',
    host: 'db',
    database: 'dressme',
    password: 'root',
    port: 5432,
}

const pool = () => {
    return new Promise(function (resolve, reject) {
        new Pool(config).connect()
            .then((client) => resolve(client))
            .catch(() => {
                reject({ status: "500", error: "db" })
            })
    })
}



module.exports = pool