const getQuery = () => ({
    text: 'SELECT * FROM TYPE',
})

const addQuery = (name) => ({
    text: 'INSERT INTO TYPE (name)  VALUES ($1);',
    values: [name],
})


exports.getType = (client, id) => {
    return new Promise(function (resolve, reject) {
        client.query(getQuery(id))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => reject({ status: 400, error: "request" }))
            .then(() => client.end())
    })
}

exports.addType = async (client, query) => {
    return new Promise(function (resolve, reject) {
        client.query(addQuery(query))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => { reject({ status: 400, error: "request" }) })
            .then(() => client.end())
    })
}