const $um = require("unimapperjs");
const MySqlAdapter = require("unimapperjs/adapters/MySqlAdapter");

// Domain creation - connect to database via MySQL adapter
const domain = $um.createDomain(MySqlAdapter, { // connection string or object with options - specific to adapter
	host: '127.0.0.1',
	user: 'test',
	password: 'test',
	database: "test"
});

exports.domain = domain;