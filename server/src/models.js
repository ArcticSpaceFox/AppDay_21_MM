const { Sequelize, DataTypes } = require("sequelize");

/**
 * Define application models
 *
 * @param sequelize {Sequelize} Sequelize.
 * @returns {Promise<void>}
 */

async function defineModels(sequelize) {

	// models

	const user = sequelize.define("user", {
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
			type: DataTypes.DATE,
			allowNull: false
		},
		minAge: {
			type: DataTypes.INTEGER,
			defaultValue: 17,
			allowNull: false
		},
		maxAge: {
			type: DataTypes.INTEGER,
			defaultValue: 35,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		}
	}, {
		tableName: "account",
	});

	const studyGroup = sequelize.define("study-group", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: "study_group"
	});

	const tag = sequelize.define("tag", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.INTEGER,
			name: DataTypes.TEXT
		}
	}, {
		tableName: "tag"
	});

	const question = sequelize.define("question", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		votes: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		}
	}, {
		tableName: "question"
	});

	const response = sequelize.define("response", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		votes: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: "response"
	});

	// associations

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

model Studiengruppe {
  id      Int    @id @default(autoincrement())
  name    String @unique
  members User[]
  tags    Tag[]
}

model Tag {
  id        Int             @id @default(autoincrement())
  name      String
  gruppen   Studiengruppe[]
  questions Question[]
}

model Question {
  id          Int        @id @default(autoincrement())
  title       String
  description String
  tags        Tag[]
  votes       Int        @default(0)
  creator     User       @relation(references: [id], fields: [creatorId])
  creatorId   Int
  answers     Response[]
}

model Response {
  id         Int       @id @default(autoincrement())
  votes      Int       @default(0)
  question   Question? @relation(fields: [questionId], references: [id])
  questionId Int?
  content    String
}
	 */

	// user
	user.belongsToMany(studyGroup, { through: "allocate" });
	user.hasMany(question);

	// study group
	studyGroup.belongsToMany(user, { through: "allocate" });
	studyGroup.belongsToMany(tag, { through: "tag_group" });

	// tag
	tag.belongsToMany(studyGroup, { through: "tag_group" });
	tag.belongsToMany(question, { through: "tag_question" })

	// question
	// question.hasMany(response);

	// response
	// response.hasOne(question);

}

module.exports = {
	defineModels
}
