require('./prototype.js');

var url    = require('url');
var http   = require('http');
var client = require('./client.js');

function Server(port) {
	var self = this;

	if (router.Routes.routes.empty()) {
		console.log('You need to define routes');
		process.exit();
	}

	function handleRequest(request, response) {
		// check routes during every request because it's possible to change them during runtime
		if (router.Routes.routes.empty()) {
			console.log('You need to define routes');
			process.exit();
		}

		var pathname = url.parse(request.url).pathname;

		self.client = new client.Client(request, response);
		self.client.handle(router.Routes.route(pathname));

		response.end();
	}

	http.createServer(handleRequest).listen(port);
}

exports.Server = Server;
