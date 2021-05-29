const { setup } = require("./backend");
const fs = require("fs/promises");

const actions = {
	"import": importData,
	"export": exportData
}

async function exportData(app, options) {
	const sequelize = app.get("sequelize");
	const { models } = sequelize;
	const storage = {};

	for (let key of Object.keys(models)) {
		const model = models[key];
		console.log("exporting", model);

		const entries = await model.findAll();
		storage[key] = entries.map(e => e.get({ plain: true }));
	}

	const { path } = options;

	await fs.writeFile(path, JSON.stringify(storage, null, "\t"));
}

async function importData(app, options) {
	const { path } = options;

	const sequelize = app.get("sequelize");
	const { models } = sequelize;

	const content = await fs.readFile(path);
	const storage = await JSON.parse(content.toString());

	for (let key of Object.keys(models)) {

		const entries = storage[key];
		if (!entries) {
			console.error(`model ${ key } does not exist in file, skipping`);
			continue;
		}

		const model = models[key];
		console.log("importing data for model", key);

		await model.bulkCreate(entries);
	}
}

function usage() {
	console.log("usage: node src/data.js :action :path");
	console.log("export / import data from / to json + database");
	console.log("arguments")
	console.log(":action string, one of 'import' or 'export'");
	console.log(":path the path where to export / import the data from / to");
	console.log("note: the environment database configuration is used in the same way as the actual application")
}

async function main() {

	const args = process.argv;

	if (args.length < 4) {
		console.error("bad argument length. Need action (export |import) and path as arguments.");
		usage();
		process.exit(1);
	}

	const action = args[2];
	const path = args[3];

	if (!(action in actions)) {
		console.log("unknown action", action);

		usage();
		process.exit(1);
	}

	const doReset = (args[args.length - 1] === "--reset");
	console.log("doReset", doReset);

	const options = { path }

	const app = await setup({
		deep: false,
		forceSync: doReset
	});
	const fn = actions[action];
	await fn(app, options);
}

main().then(() => {
	console.log("action completed successfully");
}).catch((e) => {
	console.error("an error occurred while performing the desired action");
	console.error(e);
});
