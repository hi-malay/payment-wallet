const express = require('express');
const { check } = require('express-validator');

const userController = require('../controllers/user-controllers');

const router = express.Router();

router.get('/fullList', userController.getFullUser);
router.get('/:pid', userController.getUserById);
router.post(
    '/add',
    [
        check('name')
            .not()
            .isEmpty(),
        check('phone').isLength({ min: 9 }),
        check('amount')
            .not()
            .isEmpty()
    ],
    userController.createUser
);

router.patch(
    '/addFunds/:pid',
    [
        check('amount')
            .not()
            .isEmpty()
    ],
    userController.addFunds
);

router.patch(
    '/spendFunds/:pid',
    [
        check('amount')
            .not()
            .isEmpty()
    ],
    userController.spendFunds
);


module.exports = router;
