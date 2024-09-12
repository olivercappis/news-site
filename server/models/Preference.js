const { Schema } = require('mongoose');

const preferenceSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = preferenceSchema