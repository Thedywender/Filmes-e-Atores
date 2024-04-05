const { Model, DataTypes } = require('sequelize');

class Actor extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      nationality: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Movie, { through: 'MovieActors', as: 'movies' });
  }
}

module.exports = Actor;