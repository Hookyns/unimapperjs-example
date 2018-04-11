const {type} = require("unimapperjs");
const {domain} = require("../domain");

/**
 * @class Subject
 * @extends Entity
 */
const Subject = domain.createEntity("Subject", {
	name: type.string.length(100),
	active: type.boolean
});

exports.Subject = Subject;