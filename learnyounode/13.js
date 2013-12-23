var http = require('http');
var url = require("url");

var server = http.createServer(function (req, res) {
  var pReq = url.parse(req.url, true);
  var dt = new Date(pReq.query.iso);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (pReq.pathname==="/api/parsetime"){
    res.end(JSON.stringify({
        hour: dt.getHours(),    
        minute: dt.getMinutes(),    
        second: dt.getSeconds()    
    }));
  } else if (pReq.pathname==="/api/unixtime"){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        unixtime: dt.getTime()    
    }));
  }else{
    res.end();
  }
});
server.listen(parseInt(process.argv[2]));
