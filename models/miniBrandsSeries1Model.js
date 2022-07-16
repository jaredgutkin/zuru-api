const mongoose = require('mongoose')

const miniBrandsSeries1Schema = mongoose.Schema({
    set: {
        type: String,
        // required: true
    },
    setName: {
        type: String,
        // required: true
    },
    seriesNo: {
        type: Number,
        // required: true
    },
    item: {
        type: String,
        // required: true,
    },
    itemNo: {
        type: Number,
        // required: true
    },
    itemName: {
        type: String,
        // required: true
    },
    brandName: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    realImage: {
        type: String,
    },
    rarity: {
        type: String,
        // required: true
    },
    specialFeature: {
        type: String,
        // required: true
    },
})

module.exports = mongoose.model('MBS1', miniBrandsSeries1Schema, 'miniBrandsSeries1')