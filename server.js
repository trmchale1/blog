var express = require('express');
var app = express();


var blog1 = "<h1>Tim's blog</h1><p>So I decided that my first blog post would be about how I built this blog</p>";

var html = "<h1>Tim's Blog</h1><br><p>In this first blog I share with you the code I used to build this blog</p><a href=blog1>Blog 1</a>";

app.get('/', function (req, res) {
	res.set('Content-Type','text/html');  
	res.send(new Buffer(html));
});

app.get('/blog1', function(req,res){
	res.set('Content-Type','text/html');  
	res.send(new Buffer(blog1));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
