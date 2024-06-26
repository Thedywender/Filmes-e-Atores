const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Atores = sequelize.define('atores', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'atores',
    timestamps: false,
    underscored: true,
  });

  Atores.associate = (models) => {
    Atores.belongsToMany(models.filmes, {
      through: models.FilmesAtores,
      foreignKey: 'atorId',
      otherKey: 'filmeId',
      as: 'filmes',
    });
  }

  return Atores;
};