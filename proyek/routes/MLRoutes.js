const router = require('express').Router()
const controller = require('../controller/editML.js')

router.get('/', controller.getML);
router.post('/:usernameweb', controller.masukML);
router.delete('/:usernameweb', controller.deleteML);
router.put('/:usernameweb', controller.updateML);


module.exports = router; 