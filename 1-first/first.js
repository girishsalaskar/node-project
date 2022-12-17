var http = require('http');

http.createServer(function(req, res){
    res.write('Hello, first response');
    res.end();
}).listen(3000);