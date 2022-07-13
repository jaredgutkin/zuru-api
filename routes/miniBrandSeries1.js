const express = require('express')
const router = express.Router()
const { getMBS1, addMBS1 } = require('../controllers/miniBrandSeries1Controller')
router
    .route('/')
    .get(getMBS1)
    .post(addMBS1)


module.exports = router