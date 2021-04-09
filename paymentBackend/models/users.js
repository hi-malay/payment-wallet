const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    amount: { type: Number, required: true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'auth' }

}, {
    timestamps: true,
});

module.exports = mongoose.model('userDetails', userSchema);