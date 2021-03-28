const mongoose = require('mongoose');

const transSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Number, required: true },
    amount: { type: Date, required: true },
    balance: { type: Number, required: true }

}, {
    timestamps: true,
});

module.exports = mongoose.model('transSchema', transSchema);