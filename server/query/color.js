const getQuery = () => ({
    text: 'SELECT * FROM COLOR',
})

const addQuery = (name) => ({
    text: 'INSERT INTO COLOR (name)  VALUES ($1);',
    values: [name],
})


exports.getColor = (client, id) => {
    return new Promise(function (resolve, reject) {
        client.query(getQuery(id))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => reject({ status: 400, error: "request" }))
            .then(() => client.end())
    })
}

exports.addColor = async (client, query) => {
    return new Promise(function (resolve, reject) {
        client.query(addQuery(query))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => { reject({ status: 400, error: "request" }) })
            .then(() => client.end())
    })
}