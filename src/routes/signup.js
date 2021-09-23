const express = require('express');
const router = express.Router();

const SignupController = require('../app/controllers/SignupController')

router.use('/', SignupController.index)

module.exports = router;