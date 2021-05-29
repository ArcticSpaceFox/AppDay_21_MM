const sequelizeService = require("feathers-sequelize");
const { Op } = require("sequelize");

// pagination for custom queries

async function addPagination(options, model, query, parameters) {
	const { paginate } = options;

	const { query: queryParameters } = parameters;
	const { $limit = paginate.default, $skip = "0" } = queryParameters;

	const limit = parseInt($limit, 10);
	const offset = parseInt($skip, 10);

	let q = {};

	Object.assign(q, query);

	Object.assign(q, {
		limit,
		offset
	});

	const result = await model.findAndCountAll(q);
	const { rows: data, count: total } = result;

	return {
		total,
		skip: offset,
		limit,
		data
	}

}

async function userGroupHook(context) {
	if(!context.params.sequelize) {
		context.params.sequelize = {};
	}

	const sequelize = context.params.sequelize;
	sequelize.raw = false;
	sequelize.include = [
		{
			model: context.app.services["study-group"].Model
		}
	];
	return context;
}

// custom services

class SessionService {

	constructor(app) {
		this.sequelize = app.get("sequelize");
	}

	async create(data, p) {
		const { user } = this.sequelize.models;
		return await user.findOne({
			where: {
				email: data.email
			}
		});
	}

}

// groups of a user
class UserGroupService {

	constructor(app) {
		this.sequelize = app.get("sequelize");
	}

	async get(id) {
		const { user, "study-group": sg } = this.sequelize.models;
		const result = await user.findOne({
			where: {
				id
			},
			include: [sg]
		});

		return result["study-groups"];
	}

	async create(id, param) {
		const { "study-group": sg } = this.sequelize.models;
		
		const available = await sg.findAll({
			where: {
				id: {
					$in: id
				}
			}
		})
	}

}

// users of a group
class GroupUserService {

	constructor(app) {
		this.sequelize = app.get("sequelize");
	}

	async get(id) {
		const { user, "study-group": sg } = this.sequelize.models;
		const result = await sg.findOne({
			where: {
				id
			},
			include: [user]
		});

		console.log("result", result)
		return result;
	}

}

// tags of a group
class GroupTagService {

	constructor(app) {
		this.sequelize = app.get("sequelize");
	}

	async get(id) {
		const { tag, "study-group": sg } = this.sequelize.models;
		return await sg.findOne({
			where: {
				id
			},
			include: [tag]
		});
	}

}

class GroupSearchService {

	constructor(app, options) {
		this.sequelize = app.get("sequelize");
		this.options = options;
	}

	async find(params) {
		const { "study-group": sg } = this.sequelize.models;
		const { query } = params;

		if(!query) {
			throw Error("bad query");
		}

		const q = (query.content) ? {
			where: {
				name: {
					[Op.iLike]: `%${query.content.toLowerCase()}%`
				}
			}
		} : {}

		return addPagination(this.options, sg, q, params);
	}

}

async function initializeServices(app) {

	const paginate = {
		default: 5,
		max: 100
	}

	const sequelize = app.get("sequelize");
	const { models } = sequelize;

	for (let key of Object.keys(models)) {
		const model = models[key];
		const path = `/${ key }`;
		app.use(path, sequelizeService({
			Model: model,
			paginate
		}));
	}

	app.use("/login", new SessionService(app));
	app.use("/user-group", new UserGroupService(app));
	app.use("/group-user", new GroupUserService(app));
	// app.use("/group-tags", new GroupTagService(app));
	app.use("/search-group", new GroupSearchService(app, { paginate }));

	app.service("user").hooks({
		before: {
			find: [userGroupHook]
		}
	});

	app.service("study-group").hooks({
		before: {
			find: [async context => {
				if(!context.params.sequelize) {
					context.params.sequelize = {};
				}

				const sequelize = context.params.sequelize;
				sequelize.raw = false;
				sequelize.include = [
					{
						model: context.app.services["tag"].Model
					}
				];
				return context;
			}]
		}
	});

}

module.exports = {
	initializeServices
}
