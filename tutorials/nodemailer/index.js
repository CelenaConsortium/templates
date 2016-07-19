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

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service : "gmail",
  auth    : {
    user     : process.env.MAIL_ADDRESS, // replace in env variable
    pass : process.env.MAIL_PASSWORD, // replace in env variable
  }
});

////////////////////////////////////////////////
////////////////////*~ ROUTES ~*////////////////
////////////////////////////////////////////////

app.get('/', function (req, res)
{
  res.render('home.html');
})


app.post('/sendEmail', function(req, res){
  var email = req.body.email;
  var mailOptions = {
      from: 'Celena', // sender address
      to: [email], // list of receivers
      subject: 'Hello!', // Subject line
      text: 'this is a sample app for nodemailer'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

})

////////////////////////////////////////////////
/////////////////*~  Run App ~*/////////////////
////////////////////////////////////////////////

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
