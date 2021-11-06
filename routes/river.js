var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("river", { title: "Search Results river" });
});

module.exports = router;