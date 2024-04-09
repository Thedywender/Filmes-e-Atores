'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('atores', [
      { nome: 'Tom Hanks', data_nascimento: '1956-07-09', nacionalidade: 'Americano'},
      { nome: 'Morgan Freeman', data_nascimento: '1937-06-01', nacionalidade: 'Americano'},
      { nome: 'John Travolta', data_nascimento: '1924-04-03', nacionalidade: 'Americano'},
      { nome: 'Robert De Niro', data_nascimento: '1943-08-17', nacionalidade: 'Americano'},
      { nome: 'Al Pacino', data_nascimento: '1940-04-25', nacionalidade: 'Americano'},
      { nome: 'Christian Bale', data_nascimento: '1974-11-11', nacionalidade: 'Americano'},
      { nome: 'Johnny Depp', data_nascimento: '1963-06-09', nacionalidade: 'Americano'},
      { nome: 'Brad Pitt', data_nascimento: '1963-12-18', nacionalidade: 'Americano'},
      { nome: 'Denzel Washington', data_nascimento: '1954-12-28', nacionalidade: 'Americano'},
      { nome: 'Samuel L. Jackson', data_nascimento: '1970-10-08', nacionalidade: 'Americano'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atores', null, {});
  }
};