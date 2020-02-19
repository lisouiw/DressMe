const model = require('../services/model')
const router = require('express').Router()

router.get('/', (req, res) => {
    model(req.query.id, "getUsers", "users")
        .then((e) => {
            res.status(e.status).json(e)
        })
        .catch((err) =>
            res.status(err.status).json(err)
        )
})

module.exports = router
