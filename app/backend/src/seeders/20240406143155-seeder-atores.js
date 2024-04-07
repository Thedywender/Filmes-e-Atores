'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('atores', [
      { nome: 'Tom Hanks', data_nascimento: '1956-07-09', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Morgan Freeman', data_nascimento: '1937-06-01', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'John Travolta', data_nascimento: '1924-04-03', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Robert De Niro', data_nascimento: '1943-08-17', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Al Pacino', data_nascimento: '1940-04-25', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Christian Bale', data_nascimento: '1974-11-11', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Johnny Depp', data_nascimento: '1963-06-09', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Brad Pitt', data_nascimento: '1963-12-18', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Denzel Washington', data_nascimento: '1954-12-28', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Samuel L. Jackson', data_nascimento: '1970-10-08', nacionalidade: 'Americano', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atores', null, {});
  }
};