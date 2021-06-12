const router = require('express').Router()
const controller = require('../controller/editPUBG.js')

router.get('/', controller.getPUBG);
router.post('/', controller.masukPUBG);
router.delete('/', controller.deletePUBG);
router.put('/', controller.updatePUBG);


module.exports = router; 