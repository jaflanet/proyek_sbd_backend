"use strict";

var router = require('express').Router();

var controller = require('../controller/editTeamPUBG.js');

router.get('/', controller.getTeamPUBG); // router.post('/', controller.Teammate);

module.exports = router;