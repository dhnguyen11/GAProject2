const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    index: Number,
    name: String,
    moves: [String],
    ability: String,
    item: String
}, {
    timestamps: true
})

module.exports = memberSchema;