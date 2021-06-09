const router = require('express').Router()
const controller = require('../controller/editValo.js')

router.get('/', controller.getValo);
router.post('/:usernameweb', controller.masukValo);
router.delete('/:usernameweb', controller.deleteValo);
router.put('/:usernameweb', controller.updateValo);


module.exports = router; 