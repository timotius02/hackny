//server.js

//BASE SETUP

//====================================================================
//imports 
var express = require('express'); //call express
var app = express(); //define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({strict: false}));

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8080; //set our port


//ROUTES =============================================================

var router = express.Router(); //get an instance of the express Router

//middleware to use for all request
router.use(function(req, res, next) {
    //console.log('Something is happening');
    next(); //make sure we go to the next routes
});


//test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

//------------------------------------------
router.route('/translate/:from/:to')
    //create a bear by by POST request
    .post(function(req, res) {



    });
router.route('/send/:email1/:email2')
    .post(function(req, res) {

    });




//REGISTER OUR ROUTES ------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//START THE SERVER

app.listen(port);
console.log('Listening to port ' + port);
