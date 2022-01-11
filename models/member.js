const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: String,
    moves: [String],
    url: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Member', memberSchema);