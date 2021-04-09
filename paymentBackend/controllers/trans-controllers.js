const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const Trans = require('../models/transactions');

const getTrans = async (req, res, next) => {
    let trans;

    try {
        trans = await Trans.find();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a Users.',
            500
        );
        return next(error);
    }
    console.log("bb", trans)
    await res.send({ trans });

    // => { user } => { user: user }
};

exports.getTrans = getTrans;

