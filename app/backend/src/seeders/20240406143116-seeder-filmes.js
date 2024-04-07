'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('filmes', [
      { titulo: 'Forrest Gump', ano_lancamento: 1994, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Pulp Fiction', ano_lancamento: 1994, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Shawshank Redemption', ano_lancamento: 1994, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Godfather', ano_lancamento: 1972, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Dark Knight', ano_lancamento: 2008, disponivel: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('filmes', null, {});
  }
};