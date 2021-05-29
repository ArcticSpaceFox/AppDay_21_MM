const { Sequelize } = require("sequelize");
const { defineModels } = require("./models");
const fs = require("fs/promises");

async function initializeDatabase(app, opt) {
	let configuration = app.get("configuration");
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

	const sequelize = new Sequelize(options);
	await sequelize.authenticate();

	await defineModels(sequelize);
	await sequelize.sync({ force: opt.forceSync });

	app.set("sequelize", sequelize);
}

module.exports = {
	initializeDatabase
}
