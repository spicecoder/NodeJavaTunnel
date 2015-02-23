var querystring = require('querystring');

var data = querystring.stringify({
      username: yourUsernameValue,
      password: yourPasswordValue
    });

var options = {
    host: 'my.url',
    port: 80,
    path: '/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
});

req.write(data);
req.end();