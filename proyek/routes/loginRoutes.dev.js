"use strict";

var router = require('express').Router();

var controller = require('../controller/editLogin.js');

router.post('/', controller.updateLogin);
router.get('/', controller.getLogin);
module.exports = router;