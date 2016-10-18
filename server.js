var http = require('http');

http.createServer(function (req, res){

if(req.url === '/start') {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Ready to answer some questions?\n");
}

else  if(req.url === '/start/no') {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Ok maybe next time!\n");
}

else if(req.url === '/start/yes') {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Is this equality true or false? (4+3)/7*0 = 0\n");
}

else if(req.url === '/start/yes/true') {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("You're right!\n");
}

else if(req.url === '/start/yes/false') {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("You're wrong!\n");
}

else
{
	res.writeHead(404, {'Content-Type' : 'text/plain'});
	res.end("Error!\n");
}

}).listen(956);