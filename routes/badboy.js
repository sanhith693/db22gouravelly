var express = require('express');
const costume_controlers= require('../controllers/costume');
var router = express.Router();
/* GET costumes */
router.get('/', badboy_controlers.costume_view_all_Page );
//router.get('/detail', badboy_controlers.costume_view_one_Page);
module.exports = router;