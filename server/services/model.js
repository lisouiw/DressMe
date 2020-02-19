const pool = require('../sql/pool')

const model = async (data, name, tops) => {
  return new Promise(function (resolve, reject) {
    pool()
      .then((client) => {
        const query = require(`../query/${tops}`)

        resolve(query[name](client, data))
      })
      .catch((err) => reject(err))
  })
}

module.exports = model
