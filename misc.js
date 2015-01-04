var html = "<body><h1>Tim's Blog</h1> \
<h4>How to set up a server in node.js</h4> \
<p>Open up your terminal and open a new directory called newdir <i>mkdirq newdir</i> then, <i>cd newdir</i>. Make sure you have node.js downloaded, as well as npm and express. If you haven't downloaded them be sure to now.</p> \
<p>Vim your way into a file called index.js(or use editor of you choice). Now we can start writing some code</p> \
<br> \
<BLOCKQUOTE> <p>var express = require('express');</p> \
<p>var app = express();</p> \
<p>app.get('/', function (req, res) { </p>\
<BLOCKQUOTE><p>res.set('Content-Type','text/html');</p>  \
	<p>res.send(new Buffer(html));</p></BLOCKQUOTE> \
<p>});</p> \
<p>var server = app.listen(3000, function () {</p> \
 <BLOCKQUOTE><p>var host = server.address().address;</p> \
  <p>var port = server.address().port;</p> \
  <p>console.log('Example app listening at http://%s:%s', host, port);</p> </BLOCKQUOTE>\
<p>});</p> \
</BLOCKQUOTE> \
<br> \
\
<p>First we require express, a middleware to abstract away some of the nitty gritty of low level node. \
When app.get gets a '/' it responds with html, mine is currently rendering this page. App.listen starts the server on http://localhost:3000/. If you wanted to build out this site, you would add more gets to route the application to new '/addsomethinghere'</p> \
\
</body>";

module.exports.html = html;
