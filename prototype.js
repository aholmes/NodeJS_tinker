Object.prototype.empty = function() {
	for (var key in this) {
		if (!this.hasOwnProperty(key)) continue;

		return false;
	}

	return true;
}
