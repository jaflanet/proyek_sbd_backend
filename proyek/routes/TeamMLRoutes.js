const router = require('express').Router()
const controller = require('../controller/editTeamML.js')

router.get('/', controller.getTeamML);
// router.post('/', controller.Teammate);




module.exports = router; 