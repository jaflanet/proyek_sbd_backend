const router = require('express').Router()
const controller = require('../controller/editTeamPUBG.js')

router.get('/', controller.getTeamPUBG);
// router.post('/', controller.Teammate);




module.exports = router; 