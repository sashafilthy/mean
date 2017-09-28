/**
 * Created by ifelsc on 9/14/2017.
 */
//enable Router from express
var express = require('express');
var router = express.Router();

//serve the static assets
router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

router.get('/', function(req, res){
    //serve the posts html file on Node on port 3000
    res.sendfile('layouts/app.html')
});
module.exports = router;




