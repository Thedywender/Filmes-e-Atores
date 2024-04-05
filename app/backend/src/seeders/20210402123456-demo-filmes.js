export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Filmes', [
      { titulo: 'Forrest Gump', ano: 1994, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Pulp Fiction', ano: 1994, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Shawshank Redemption', ano: 1994, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Godfather', ano: 1972, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Dark Knight', ano: 2008, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Filmes', null, {});
  }
};