const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model
// User model MUST include the googleId, like in the passport example app
const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);