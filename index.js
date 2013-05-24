var server = require('./server.js');
var url    = require('url');

GLOBAL.router = require('./router.js');

router.Routes.add('main', '/page1', function(request, response) {
	var date = new Date();

	response.write("You accessed this page at " + date.toISOString() + "\n");
});

router.Routes.add('secondpage', '/page2', function(request, response) {
	query = url.parse(request.url, true);

	if (query.query && typeof(query.query['q']) !== "undefined") {
		response.write("Welcome to page two!\nYou queried for '" + query.query['q'] + "'");
	} else {
		response.write("Welcome to page two!\n");
	}
});

router.Routes.add('thirdpage', '/page3', function(request, response) {
	response.write("You found the third page!\n");
});

new server.Server(8080);

console.log('server started');
