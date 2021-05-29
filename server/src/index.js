const express = require("@feathersjs/express");
const feathers = require("@feathersjs/feathers");
const sequelizeService = require("feathers-sequelize");
const { Sequelize } = require("sequelize");
const fs = require("fs/promises");

const { defineModels } = require("./models");

async function initializeInterface(configuration) {
	const app = express(feathers());

	app.use(express.json());

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.configure(express.rest());

	const { http } = configuration;
	const { port = 6002 } = http;

	return new Promise(((resolve) => {
		console.log("LISTENING")
		app.listen(port).on("listening", () => {
			resolve(app);
		});
	}));
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

	const sequelize = await initializeDatabase(configuration);
	const app = await initializeInterface(configuration);

	app.set("sequelize", sequelize);

	for(let key of Object.keys(sequelize.models)) {
		const model = sequelize.models[key];
		const path = `/${key}`;
		app.use(path, sequelizeService({
			Model: model
		}));
	}

}

main().then(() => {
	console.log("main promise done");
}).catch((e) => {
	console.error("an error occurred while executing the app.");
	console.error(e);
});
