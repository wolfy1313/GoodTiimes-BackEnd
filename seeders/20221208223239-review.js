'use strict';

/** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let reviews = [...Array(3)].map ((_) => ({
      title: falso.randPhrase(),
      review: falso.randQuote({ length: 1 }),
      user_id: falso.randNumber({ min:1, max:3 }),
      venue_id: falso.randNumber({ min:1, max:3 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('reviews', reviews)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews')
}
}
