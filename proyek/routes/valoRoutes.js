const router = require('express').Router()
const controller = require('../controller/editValo.js')

router.get('/', controller.getValo);
router.post('/:usernameweb', controller.masukValo);
router.delete('/', controller.deleteValo);
router.put('/', controller.updateValo);


module.exports = router; 