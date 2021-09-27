const express = require('express');
const router = express.Router();

const SignupController = require('../app/controllers/SignupController')

router.get('/', SignupController.index)
router.post('/', SignupController.postSignUp)

module.exports = router;