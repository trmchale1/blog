var express = require('express');
var app = express();
var misc = require('./misc')

var html = "<h1>Tim's Blog</h1><br><p>In this first blog I share with you the code I used to build this blog</p><a href=blog1>Blog 1</a>";

app.get('/', function (req, res) {
	res.set('Content-Type','text/html');  
	res.send(new Buffer(html));
});

app.get('/blog1', function(req,res){
	res.set('Content-Type','text/html');  
	res.send(new Buffer(misc.html));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
