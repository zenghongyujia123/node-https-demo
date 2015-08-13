var https = require('https'),
  fs = require("fs"),
  app = require('express')();

var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem')
};

app.get('/', function (req, res, next) {
  return res.send('fot https test');
});

app.listen(3012, function () {
  console.log('Http server listening on port ' + 3012);
});

https.createServer(options, app).listen(3011, function (req, res) {
  console.log('Https server listening on port ' + 3011);
});