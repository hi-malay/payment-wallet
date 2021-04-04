const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Users = require('../models/users');
const Trans = require('../models/transactions');

const getFullUser = async (req, res, next) => {
  let user;
  let userMain
  try {
    userMain = await Users.find();
    user = userMain.filter(data => data.creator == req.userData.userId)
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a Users.',
      500
    );
    return next(error);
  }

  await res.send({ user });

  // => { user } => { user: user }
};

const getUserById = async (req, res, next) => {
  const userId = req.params.pid; // { pid: 'p1' }

  let user;
  try {
    user = await Users.findById(userId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a Users.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      'Could not find a user for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) }); // => { user } => { user: user }
};

// function getuserById() { ... }
// const getuserById = function() { ... }

const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, phone, amount } = req.body;


  // const title = req.body.title;
  const createdUser = new Users({
    name, phone, amount, creator: req.userData.userId
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      'Creating users failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ users: createdUser });
};


const transaction = async (userId) => {
  let user, trans
  try {
    user = await Users.findById(userId);

  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }
  const { name, data, amount } = user
  const transUser = new Trans({
    name, data, amount
  });

  try {
    console.log(ab, transUser)
    await transUser.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }
};


const addFunds = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422))
  }

  const { amount } = req.body;
  const userId = req.params.pid;

  let user;
  try {
    user = await Users.findById(userId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  user.amount = parseInt(user.amount) + parseInt(amount);


  try {
    await user.save();
    transaction(userId)
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
};

const spendFunds = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { amount } = req.body;
  const userId = req.params.pid;

  let user;
  try {
    user = await Users.findById(userId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  user.amount = parseInt(user.amount) - parseInt(amount);


  try {
    await user.save();
    transaction(userId)
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
};

exports.getUserById = getUserById;
exports.createUser = createUser;
exports.addFunds = addFunds;
exports.getFullUser = getFullUser;
exports.spendFunds = spendFunds;

