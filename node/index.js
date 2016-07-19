////////////////////////////////////////////////
////////////////////*~ SETUP ~*/////////////////
////////////////////////////////////////////////

//no need to understand what is going on here

var express = require('express')
var app = express();
fs = require('fs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


////////////////////////////////////////////////
////////////////////*~ ROUTES ~*////////////////
////////////////////////////////////////////////

app.get('/', function (req, res)
{
  res.render('home.html');
})

////////////////////////////////////////////////
/////////////////*~  Run App ~*/////////////////
////////////////////////////////////////////////

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
