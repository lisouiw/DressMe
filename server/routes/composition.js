const model = require('../services/model')
const router = require('express').Router()

router.get('/', function (req, res) {
    model(req.query.id, "getComposition", "composition")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.post('/', function (req, res) {
    model(req.query, "addComposition", "composition")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

module.exports = router
