var express = require('express');
var router = express.Router();
var path = require('path');

router.use("/api/adventures", require("./api_router.js"))
router.use("/api/wishlist", require("./wishlist_router.js"))

router.get('/', function(req, res){
 res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;