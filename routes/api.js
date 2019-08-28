var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/auth/loginuser', function (req, res, next) {
    res.send({
        "responseStatus": false,
        "responseMessage": "User already Registered"
    });
});


module.exports = router;
