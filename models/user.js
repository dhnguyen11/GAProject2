const mongoose = require('mongoose');

// Create your User Model
// User model MUST include the googleId, like in the passport example app
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
})