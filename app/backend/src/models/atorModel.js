const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Atores = sequelize.define('Atores', {
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    nacionalidade: DataTypes.STRING,
  });

  Atores.associate = (models) => {
    Atores.belongsToMany(models.Movie, { through: 'FilmesAtores', as: 'filmes' });
  };

  return Atores;
};