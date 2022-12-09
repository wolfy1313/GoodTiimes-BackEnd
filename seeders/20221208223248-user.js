'use strict';

/** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [...Array(10)].map ((_) => ({
      name: falso.randFullName(),
      username: falso.randFirstName(),
      passwordDigest: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
};
