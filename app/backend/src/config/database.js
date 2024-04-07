const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres');

const development = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  development,
};