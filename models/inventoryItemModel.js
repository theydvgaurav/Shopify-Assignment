const mongoose = require('mongoose')

const itemtemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

const items = mongoose.model('items', itemtemplate)

module.exports = { items }