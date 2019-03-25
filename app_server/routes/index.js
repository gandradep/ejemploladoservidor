var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

/* GET home page. */

router.get('/', ctrlMain.index );
router.get('/lugar', ctrlMain.hola );
router.get('/about', ctrlMain.about );


module.exports = router;
