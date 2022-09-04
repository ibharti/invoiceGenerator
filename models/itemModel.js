const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tax: {
        type: Number,
        required: true
    }


}, { timestamp: ture });

const Items = mongoose.model("Items", itemSchema)

module.exports = Items;