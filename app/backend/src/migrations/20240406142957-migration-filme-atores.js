'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('FilmesAtores', {
      filmeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'filmes',
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      atorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'atores',
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('FilmesAtores');
  }
};