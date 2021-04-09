const express = require('express');
const { check } = require('express-validator');

const transController = require('../controllers/trans-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();
router.get('/fullList', transController.getTrans);
module.exports = router;
