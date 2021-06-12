const router = require('express').Router()
const controller = require('../controller/editTeamValo.js')

router.get('/', controller.Teammate);
// router.post('/', controller.Teammate);




module.exports = router; 