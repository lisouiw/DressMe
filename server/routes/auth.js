const model = require('../services/model')
const router = require('express').Router()

require('dotenv').config()

router.get('/', (req, res) => {
    model(req.query, "getAuth", "auth")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

module.exports = router
