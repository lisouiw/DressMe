const getQuery = (id) => ({
    text: 'SELECT * FROM ITEM'
})

exports.getItems = (client, id) => {
    return new Promise(function (resolve, reject) {
        client.query(getQuery(id))
            .then(res => resolve({ status: 200, result: res.rows }))
            .catch(() => reject({ status: 400, error: "request" }))
            .then(() => client.end())
    })
}