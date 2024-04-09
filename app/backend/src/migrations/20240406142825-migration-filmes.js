'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      ano_lancamento: {
        type: Sequelize.INTEGER
      },
      disponivel: {
        type: Sequelize.BOOLEAN
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('filmes');
  }
};