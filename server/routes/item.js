const model = require('../services/model')
// const check = require('../services/check')
const router = require('express').Router()

router.get('/', (req, res) => {
    model(req.query.id, "getItem", "item")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.post('/', function (req, res) {
    model(req.query, "addItem", "item")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.put('/', function (req, res) {
    model(req.query, "updateItem", "item")

        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.delete('/', function (req, res) {
    model(req.query.id, "deleteItem", "item")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

module.exports = router
