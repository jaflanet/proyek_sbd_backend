const router = require('express').Router()
const controller = require('../controller/editTeamValo')

router.get('/', controller.getTeam);
// router.post('/', controller.Teammate);




module.exports = router; 