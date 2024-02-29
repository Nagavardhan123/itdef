let http = require('http')
http.createServer(function(req,resp){
	resp.write('welcome to my server')
	resp.end()
}).listen(3000)