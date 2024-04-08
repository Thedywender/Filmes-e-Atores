const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Atores = sequelize.define('atores', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    nacionalidade: DataTypes.STRING,
  }, {
    tableName: 'atores'
  });

  // Atores.associate = (models) => {
  //   Atores.belongsToMany(models.Filmes, { through: 'FilmesAtores', as: 'filmes' });
  // };

  return Atores;
};