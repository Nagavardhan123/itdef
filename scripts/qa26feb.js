// let a="ggirishg"
// let b = a.split("")
// for(let i =0;i<b.length-1;i++){
// 	for(let j =i+1;j<b.length;j++){
// 		if (b[j]==b[i]){
// 			b[j] = ""
// 		}
// 	}
// }
// console.log(b.join(""))



// let fs = require('fs')
// fs.writeFile('naga.txt','naga is a good boy!',function(err){
// 	if(err){
// 		console.log('aah you got an error!')
// 	}
// })
// fs.readFile('naga.txt', 'utf8', function(err, data){
// 	if(err){
// 		console.log('aah you got an error!')
// 	}
// 	else{
// 		console.log(data)
// 	}
// })



// let a = require('http')
// a.createServer(function (req,res){
//     res.writeHead(200,{'text-content':'ok'})
//     res.end('naga is a godd boy!')
// }).listen(3001)


// let http = require('http')
// let url = require('url')
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'html/text'})
// 	res.write('hello!')
// 	let out = url.parse(req.url,true).query
// 	res.write(out.year+ " " + out.month)
// 	res.end()
// }).listen(8880)

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.write(txt)
//   res.end();
// }).listen(8080);