var express = require("express");
var costume_controller = require('../controllers/costume');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("river", { title: "Search Results river" });
});

module.exports = router;
// GET request for one costume.
router.get('/costume/:id', costume_controller.costume_detail);
