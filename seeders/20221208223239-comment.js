'use strict';

/** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let comments = [...Array(10)].map ((_) => ({
      comment: falso.randPhrase(),
      user_id: falso.randNumber({ min:1, max:10 }),
      party_id: falso.randNumber({ min:1, max:10 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments')
}
}
