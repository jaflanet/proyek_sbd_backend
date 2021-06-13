"use strict";

var router = require('express').Router();

var controller = require('../controller/editSignup.js');

router.get('/:username', controller.getSignup);
router.post('/', controller.Signup);
module.exports = router;