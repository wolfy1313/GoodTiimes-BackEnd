'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  User_Party.init({
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    party_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'parties',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Party',
    tableName: 'user_parties'
  });
  return User_Party;
};