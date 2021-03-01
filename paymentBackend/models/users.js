const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    amount: { type: Number, required: true }

});

module.exports = mongoose.model('userDetails', userSchema);