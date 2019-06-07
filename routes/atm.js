/* eslint-disable no-console */
const express = require('express');
const atmController = require('../controllers/Atm');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

console.log(atmController);

router.post('/', authMiddleware, atmController.createATM);
router.get('/', authMiddleware, atmController.getATM);
router.get('/:id', authMiddleware, atmController.getATMById);
router.get('/:id/widthraw', authMiddleware, atmController.withdrawMoney);
router.get('/:id/deposit', authMiddleware, atmController.depositMoney);
router.put('/:id', authMiddleware, atmController.updateATM);

module.exports = router;
