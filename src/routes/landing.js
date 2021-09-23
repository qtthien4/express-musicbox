const express = require('express');
const router = express.Router();
const landingController = require('../app/controllers/LandingController');

router.use('/', landingController.index)

module.exports = router;