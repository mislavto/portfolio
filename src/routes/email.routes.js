const express = require('express');
const router = express.Router();

const emailController = require('../controllers/email.controller');

router.get('/', emailController.findAll);

router.post('/', emailController.create);

router.get('/:id', emailController.findById);

router.delete('/:id', emailController.delete);

module.exports = router;
