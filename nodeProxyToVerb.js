var url=require('url');
var util = require("util"),
    http = require('http'), 
       qs = require('querystring');


var sreq = {url:"localhost",pathname:'/'}
var http=require('http');
var server = http.createServer(function(sreq, sres) {
  var url_parts = url.parse(sreq.url);
  var opts = {
    host: 'localhost',
    port: 8080,
    path: url_parts.pathname,
    method: sreq.method,
    headers: sreq.headers
  };
  var creq = http.request(opts, function(cres) {
    sres.writeHead(cres.statusCode, cres.headers);
    cres.pipe(sres); // pipe client to server response
	  });
  sreq.pipe(creq); // pipe server to client request
   console.log("server passed:"   ); 
  });
server.listen(80, '0.0.0.0');
console.log('Node Proxy Server Ready for Verb.');