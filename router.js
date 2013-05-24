Routes = {
	routes : {},
	add    : function(name, pathname, handler) {
		this.routes[name] = new Route(pathname, handler);
	},
	route  : function(pathname) {
		for (var name in this.routes) {
			if (this.routes[name].pathname === pathname) {
				return this.routes[name].handler;
			}
		}
	}
}

function Route(pathname, handler) {
	this.pathname = pathname;
	this.handler  = handler;
};

exports.Routes = Routes;
exports.Route  = Route;
