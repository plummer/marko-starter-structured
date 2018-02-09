const template = require('../marko/templates/index');

module.exports = {
	getIndex: function(req, res) {
		res.marko(template, {})
	}
}