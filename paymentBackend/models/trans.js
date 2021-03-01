const mongoose = require('mongoose');

const tramsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Number, required: true },
    chanegAmount: { type: Number, required: true },
    amount: { type: Number, required: true }

});

module.exports = mongoose.model('userDetails', tramsSchema);