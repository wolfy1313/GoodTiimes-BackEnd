'use strict';

/** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let venues = [...Array(3)].map ((_) => ({
      name: falso.randFullName(),
      address: falso.randFirstName(),
      image: falso.randUrl(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('venues', venues)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('venues')
  }
};
