var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
	switch (req.method) {
		// POST request body string buffering
		case 'POST':
		var item = '';
		req.setEncoding('utf8');
		req.on('data', function(chunk){
			item += chunk;
		});
		req.on('end', function(){
			items.push(item);
			res.end('OK\n');
		});
		break;
		// Fetching resources with GET requests
		case 'GET':
		items.forEach(function(item, i){
			res.write(i + ') ' + item + '\n');
		});
		res.end();
		break;
	}
});