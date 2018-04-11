const {type} = require("unimapperjs");
const {domain} = require("../domain");

// Simple entity declaration in JS; without mapping

const Subject = domain.createEntity("Subject", {
	name: type.string.length(100),
	active: type.boolean
});

exports.Subject = Subject;