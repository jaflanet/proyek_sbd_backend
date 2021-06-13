"use strict";

var router = require('express').Router();

var controller = require('../controller/editTeamValo');

router.get('/', controller.getTeam); // router.post('/', controller.Teammate);

module.exports = router;