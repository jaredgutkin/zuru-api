const express = require('express')
const router = express.Router()
const { getMBS1, addMBS1, updateMBS1 } = require('../controllers/miniBrandsSeries1Controller')
router
    .route('/')
    .get(getMBS1)
    .post(addMBS1)
router
    .route('/:itemNo')
    .put(updateMBS1)


module.exports = router