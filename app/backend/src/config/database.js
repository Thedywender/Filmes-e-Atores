const Sequelize = require('sequelize');

const development = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'db',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'postgres',
  port: process.env.DB_PORT || 5432,
};

module.exports = development