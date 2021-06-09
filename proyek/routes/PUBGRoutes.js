const router = require('express').Router()
const controller = require('../controller/editPUBG.js')

router.get('/', controller.getPUBG);
router.post('/:usernameweb', controller.masukPUBG);
router.delete('/:usernameweb', controller.deletePUBG);
router.put('/:usernameweb', controller.updatePUBG);


module.exports = router; 