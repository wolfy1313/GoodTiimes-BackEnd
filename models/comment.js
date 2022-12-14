'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to one users 
      // belongs to one venues
      // OR belongs to one event and event has many reviews
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Comment.belongsTo(models.Party, {
        foreignKey: 'party_id'
      })
    }
  }
  Comment.init({
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
    username: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE'
    },
    comment: {
      type: DataTypes.STRING,
    onDelete: 'CASCADE'}
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};