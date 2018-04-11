const $path = require("path");
const {domain} = require("./domain");

setImmediate(async () => {
	await domain.runMigration($path.resolve(__dirname, "migrations"));
	await domain.dispose();
});