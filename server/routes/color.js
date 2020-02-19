const model = require('../services/model')
const router = require('express').Router()

router.get('/', function (req, res) {
    model(req.query.id, "getColor", "color")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.post('/', function (req, res) {
    model(req.query, "addColor", "color")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

module.exports = router
