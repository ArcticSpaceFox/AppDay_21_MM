const express = require("@feathersjs/express");
const feathers = require("@feathersjs/feathers");

async function createApplication(configuration, options) {
	const app = express(feathers());

	app.set("configuration", configuration);

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.configure(express.rest());

	const { http } = configuration;
	const { port = 6002 } = http;
	const { deep } = options;

	return new Promise(((resolve) => {
		if(deep) {
			app.listen(port).on("listening", () => {
				resolve(app);
			});
		} else {
			resolve(app);
		}
	}));
}

module.exports = {
	createApplication
}
