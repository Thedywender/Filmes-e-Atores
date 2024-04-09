'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('filmes', [
      { titulo: 'Forrest Gump', ano_lancamento: 1994, disponivel: true },
      { titulo: 'Pulp Fiction', ano_lancamento: 1994, disponivel: true },
      { titulo: 'The Shawshank Redemption', ano_lancamento: 1994, disponivel: true },
      { titulo: 'The Godfather', ano_lancamento: 1972, disponivel: true },
      { titulo: 'The Dark Knight', ano_lancamento: 2008, disponivel: true }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('filmes', null, {});
  }
};