'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let user_parties = [...Array(10)].map ((_) => ({
      user_id: falso.randNumber({ min:1, max:10 }),
      party_id: falso.randNumber({ min:1, max:10 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('user_parties', user_parties)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_parties')
}
}
