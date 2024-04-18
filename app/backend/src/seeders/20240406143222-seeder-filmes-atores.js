'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FilmesAtores', [
      { filmeId: 1, atorId: 1 },
      { filmeId: 2, atorId: 3 },
      { filmeId: 3, atorId: 2 },
      { filmeId: 4, atorId: 5 },
      { filmeId: 5, atorId: 2 },
      { filmeId: 5, atorId: 1 },
      { filmeId: 5, atorId: 3 },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FilmesAtores', null, {});
  }
};