var http = require('http');
var fs = require("fs");

var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
    var fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});
server.listen(parseInt(process.argv[2]));
