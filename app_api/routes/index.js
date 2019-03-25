var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

/* GET home page. */


router.get('/lugar', ctrlMain.lugarGet);
router.post('/lugar',ctrlMain.crearLugar);
router.get('/lugar/:lugarid', ctrlMain.lugarGetOne);
router.put('/lugar/:lugarid', ctrlMain.lugarUpdateOne);
router.delete('/lugar/:lugarid', ctrlMain.lugarBorrarOne);



module.exports = router;
