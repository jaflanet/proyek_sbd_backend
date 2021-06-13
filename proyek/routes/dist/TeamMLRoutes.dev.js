"use strict";

var router = require('express').Router();

var controller = require('../controller/editTeamML.js');

router.get('/', controller.getTeamML); // router.post('/', controller.Teammate);

module.exports = router;