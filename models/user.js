'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // user has many reviews

      // User.belongsToMany(models.Venue, {
      //   as: 'reviewer',
      //   // through: models.Review,
      //   foreignKey: 'user_id',
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // })
      User.hasMany(models.Comment, {
        foreignKey: 'user_id'
      })


      User.belongsToMany(models.Party, {
        as: 'party_user',
        through: models.User_Party,
        foreignKey: 'user_id',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
    }
  }
  User.init(
    {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};