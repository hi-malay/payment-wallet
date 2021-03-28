const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const Trans = require('../models/transactions');

const getTrans = (req, res, next) => {
    Trans.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

};

exports.getTrans = getTrans;

