function Client(request, response) {
	this.request  = request;
	this.response = response;
}

Client.prototype.handle = function(routeHandler) {
	console.log("New client from " + this.request.connection.remoteAddress);

	if (routeHandler !== undefined) {
		// just send a default success header that the handler can overload in necssary
		this.response.writeHead(200, {'Content-Type' : 'text/plain'});

		routeHandler(this.request, this.response);
	} else {
		this.response.writeHead(404);
	}
}

exports.Client = Client;
