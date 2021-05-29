const sequelizeService = require("feathers-sequelize");

async function initializeServices(app) {
	const sequelize = app.get("sequelize");
	const { models } = sequelize;

	for(let key of Object.keys(models)) {
		const model = models[key];
		const path = `/${key}`;
		app.use(path, sequelizeService({
			Model: model
		}));
	}

}

module.exports = {
	initializeServices
}
