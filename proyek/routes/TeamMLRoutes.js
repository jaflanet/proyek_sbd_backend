const router = require('express').Router()
const controller = require('../controller/editTeamML.js')

router.get('/', controller.TeammateML);
// router.post('/', controller.Teammate);




module.exports = router; 