const express = require("express");
const { Sequelize } = require("sequelize");
const { defineModels } = require("./models");
const fs = require("fs/promises");

async function initializeInterface(configuration) {
	const app = express();

	const { http } = configuration;
	const { host = "0.0.0.0", port = 6002 } = http;

	app.get("/", (req, res) => {
		res.send("Hello World!");
	});

	app.listen(port, () => {
		console.log(`Example app listening at ${ host }:${ port }`);
	});

	return app;
}

async function initializeDatabase(configuration) {
	let { database: options } = configuration;

	if(options["secret"]) {
	    console.log("reading configuration from secret");
        const content = await fs.readFile("./configuration/secret.json");
        const c = JSON.parse(content.toString());
        options = c["database"];
    }

	const defaults = {
		logging: console.log,
		logQueryParameters: true,
		define: {
			freezeTableName: true,
			paranoid: false,
			timestamps: false
		}
	}

	Object.assign(options, defaults);

	console.log("options", options);
	const sequelize = new Sequelize(options);
	await sequelize.authenticate();

	await defineModels(sequelize);
	await sequelize.sync({ force: true });

	return sequelize;
}

async function main() {
	const content = await fs.readFile("./configuration/default.json");
	const configuration = JSON.parse(content.toString());

	await initializeDatabase(configuration);
	await initializeInterface(configuration);
}

main().then(() => {
	console.log("main promise done");
}).catch((e) => {
	console.error("an error occurred while executing the app.");
	console.error(e);
});
