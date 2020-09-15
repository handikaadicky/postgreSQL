'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      username: 'aa',
      password: 'bb',
      avatar: 'cc',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')

    },
    {
      username: 'aa',
      password: 'bb',
      avatar: 'cc',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')

    },
    {
      username: 'aa',
      password: 'bb',
      avatar: 'cc',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')

    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});

  }
};
