'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user_event',
        onDelete: 'CASCADE'
      })
      Event.belongsTo(models.Venue, {
        foreignKey: 'venue_id',
        as: 'venue_reviews',
        onDelete: 'CASCADE'
      })
    }
  }
  Event.init({
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    venue_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'venues',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events'
  });
  return Event;
};