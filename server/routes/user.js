const model = require('../services/model')
const check = require('../services/check')
const router = require('express').Router()

require('dotenv').config()

router.get('/', (req, res) => {
    model(req.query.id, "getUser", "user")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.post('/', (req, res) => {
    check.validateSign(
        { ...req.query, id: 0 },
        model(req.query, "addUser", "user")
    )
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

router.put('/', (req, res) => {
    check.validateSign(req.query,
        model(req.query, "updateUser", "user")
    )
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

module.exports = router
