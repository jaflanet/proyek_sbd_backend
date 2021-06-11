const router = require('express').Router()
const controller = require('../controller/editLogin.js')

router.post('/', controller.getLogin);


module.exports = router; 