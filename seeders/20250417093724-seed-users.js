"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert user data directly
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: "admin",
        password: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "user1",
        password: "password1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "user2",
        password: "password2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove all data from the Users table
    await queryInterface.bulkDelete("Users", null, {});
  },
};
