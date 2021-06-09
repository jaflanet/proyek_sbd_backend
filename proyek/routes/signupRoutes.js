const router = require('express').Router()
const controller = require('../controller/editSignup.js')

router.get('/', controller.getSignup);
router.post('/', controller.Signup);



module.exports = router; 