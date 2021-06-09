const router = require('express').Router()
const controller = require('../controller/editTeamPUBG.js')

router.get('/:username', controller.TeammatePUBG);
// router.post('/', controller.Teammate);




module.exports = router; 