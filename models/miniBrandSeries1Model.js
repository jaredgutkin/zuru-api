const mongoose = require('mongoose')

const miniBrandSeries1Schema = mongoose.Schema({
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
    rarity: {
        type: String,
        // required: true
    },
    specialFeature: {
        type: String,
        // required: true
    },
})

module.exports = mongoose.model('MBS1', miniBrandSeries1Schema, 'miniBrandSeries1')