const $umjs = require("unimapperjs");
const $path = require("path");
const {domain} = require("./domain");

// Discove all entities from given path
$umjs.initEntitiesFrom($path.resolve(__dirname, "entities"));

// Run it in next event loop iteration
setImmediate(async () => {
	await domain.createMigration($path.resolve(__dirname, "migrations"));
	await domain.dispose();
});