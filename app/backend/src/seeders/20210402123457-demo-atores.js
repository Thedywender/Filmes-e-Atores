export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Atores', [
      { nome: 'Tom Hanks', aniversario: '1956-07-09', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Morgan Freeman', aniversario: '1937-06-01', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'John Travolta', aniversario: '1924-04-03', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Robert De Niro', aniversario: '1943-08-17', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Al Pacino', aniversario: '1940-04-25', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Christian Bale', aniversario: '1974-11-11', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Johnny Depp', aniversario: '1963-06-09', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Brad Pitt', aniversario: '1963-12-18', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Denzel Washington', aniversario: '1954-12-28', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Samuel L. Jackson', aniversario: '1970-10-08', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Atores', null, {});
  }
};