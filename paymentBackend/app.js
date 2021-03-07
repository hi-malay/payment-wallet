const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const userRoutes = require('./routes/user-routes');
const HttpError = require('./models/http-error');
const authRoutes = require('./routes/auth-routes');
const app = express();
app.use(cors())
app.use(bodyParser.json());//parse obj string in to json object
// app.use  it gets executed every time no matter what URL's been hit
app.use('/api/user', userRoutes); // => /api/places...
app.use('/api/auth', authRoutes)
app.use((req, res, next) => {
    throw new HttpError('Could not find this route.', 404);
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
    .connect('mongodb://127.0.0.1:27017/paymentWallet')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });

