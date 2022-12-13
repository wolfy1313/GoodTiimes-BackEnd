'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // venue has many reviews

      // Venue.belongsToMany(models.User, {
      //   as: 'venue_reviews',
      //   through: models.Review,
      //   foreignKey: 'venue_id',
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // })

      Party.hasMany(models.Comment, {
        foreignKey: 'party_id'
      })

      Party.belongsToMany(models.User, {
        as: 'party_user',
        through: models.User_Party,
        foreignKey: 'party_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Party.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Party',
    tableName: 'parties'
  });
  return Party;
};