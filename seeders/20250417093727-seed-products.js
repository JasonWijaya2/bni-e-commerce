"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert product data directly
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        productName: "Galaxy Young",
        brand: "Samsung",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        productName: "IPhone 5",
        brand: "Apple",
        price: 999999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        productName: "HP Kentang",
        brand: "Oppo",
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove all data from the Products table
    await queryInterface.bulkDelete("Products", null, {});
  },
};
