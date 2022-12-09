'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let events = [...Array(10)].map ((_) => ({
      title: falso.randLanguage(),
      description: falso.randCompanyName(),
      user_id: falso.randNumber({ min:1, max:3 }),
      venue_id: falso.randNumber({ min:1, max:3 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('events', events)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events')
}
}
