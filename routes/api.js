var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express api' });
});

router.post('/auth/loginuser', function (req, res, next) {
    console.log(req.body);
    if (req.body.userName === 'vendorsin@gmail.com') {
        res.json({
            "responseStatus": true,
            "responseMessage": "Success",
            "loginToken": "MzAwMzkkVmVuZG9yVVNFUiBBVVRIIFRPS0VO",
            "userName": "vendorsin",
            "userId": 30039,
            "mobileNumber": "9999999999",
            "emailId": "vendorsin@gmail.com",
            "userRole": "Vendor",
            "roleId": 1
        });
    } else {
        res.json({
            "responseStatus": false,
            "responseMessage": "User does not exist"
        });
    }
});

router.post('/auth/registeruser', function (req, res, next) {
    if (req.body.emailId === 'vendorsin@gmail.com') {
        res.json({
            "responseStatus": true,
            "responseMessage": "OTP has generated"
        });
    } else {
        res.json({
            "responseStatus": false,
            "responseMessage": "User already Registered"
        });
    }
});

router.post('/otp/requestotp', function (req, res, next) {
    res.json({
        "responseStatus": false,
        "responseMessage": "User already Registered"
    });
});

router.post('/otp/validateotp', function (req, res, next) {
    res.json({
        "responseStatus": false,
        "responseMessage": "User already Registered"
    });
});


module.exports = router;
