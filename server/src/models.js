const { Sequelize, DataTypes } = require("sequelize");

/**
 * Define application models
 *
 * @param sequelize {Sequelize} Sequelize.
 * @returns {Promise<void>}
 */

/*
model User {
  id             Int             @id @default(autoincrement())
  email          String          @unique
  name           String?
  lastname       String?
  imageUrl       String?
  born           DateTime
  minage         Int             @default(17)
  maxage         Int             @default(35)
  createdAt      DateTime        @default(now())
  Studiengruppen Studiengruppe[]
  questions      Question[]
}
 */

async function defineModels(sequelize) {

	const user = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		email: {
			type: DataTypes.TEXT,
			unique: true
		},

		name: {
			type: DataTypes.TEXT,
		},

		lastName: {
			type: DataTypes.TEXT
		},

		imageUrl: {
			type: DataTypes.TEXT
		},

		born: {
			type: DataTypes.DATE
		},

		minimalAge: {
			type: DataTypes.INTEGER,
			defaultValue: 17
		},

		maximalAge: {
			type: DataTypes.INTEGER,
			defaultValue: 35
		},

		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}

	}, {
		tableName: "account",
	});

}

module.exports = {
	defineModels
}
