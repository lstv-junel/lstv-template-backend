const { Sequelize } = require("sequelize");



const environment = process.argv[2] || "dev";

const config = require(`../config/config.${environment}.json`);
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: "+08:00",
    logging: false
});

const modelDefiners = [
    require('../models/users'),
    require('../models/menus'),
    require('../models/departmentfile')
]


for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;