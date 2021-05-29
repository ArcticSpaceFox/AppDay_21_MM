const { createApplication } = require("./app");
const { initializeDatabase } = require("./db");
const { initializeServices } = require("./services");

const fs = require("fs/promises");

async function setup(options) {
	const content = await fs.readFile("./configuration/default.json");
	const configuration = JSON.parse(content.toString());
	console.log(configuration);

	const app = await createApplication(configuration, options);
	await initializeDatabase(app, options);
	await initializeServices(app);

	return app;
}

module.exports = {
	setup
}
