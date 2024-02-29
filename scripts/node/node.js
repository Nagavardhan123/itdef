let a = require('http')
a.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'ok'})
    res.end('ended!')
}).listen(3002)