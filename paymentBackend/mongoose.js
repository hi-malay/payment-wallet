const mongoose = require('mongoose');

const User = require('./models/product');

mongoose.connect(
    'mongodb://127.0.0.1:27017/paymentWallet'
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const createUser = async (req, res, next) => {
    const createdUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        amount: req.body.amount
    });
    const result = await createdUser.save();

    res.json(result);
};


exports.createUser = createUser;

