const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      isAvailable: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Actor, { through: 'MovieActors', as: 'actors' });
  }
}

module.exports = Movie;