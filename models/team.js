const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Team model
const teamSchema = new Schema({
    name: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [Schema.Types.ObjectId]
}, {
    timestamps: true
})

module.exports = teamSchema;