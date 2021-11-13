var express = require("express");
var costume_controller = require('../controllers/costume');
var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("costume", { title: "Search Results costume" });
// });

// GET request for one costume.
router.get('/costume/:id',costume_controller.costume_detail);
module.exports = router;

