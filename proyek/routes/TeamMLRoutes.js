const router = require('express').Router()
const controller = require('../controller/editTeamML.js')

router.get('/:username', controller.TeammateML);
// router.post('/', controller.Teammate);




module.exports = router; 