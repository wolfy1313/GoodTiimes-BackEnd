'use strict';

/** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let parties = [...Array(10)].map ((_) => ({
      name: falso.randFullName(),
      address: falso.randStreetAddress(),
      date: falso.randWeekday(),
      time: falso.randNumber({ min: 2, max:11 }),
      image: "image placeholder",
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('parties', parties)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('parties')
  }
};
