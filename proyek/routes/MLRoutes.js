const router = require('express').Router()
const controller = require('../controller/editML.js')

router.get('/', controller.getML);
router.post('/', controller.masukML);
router.delete('/', controller.deleteML);
router.put('/', controller.updateML);


module.exports = router; 