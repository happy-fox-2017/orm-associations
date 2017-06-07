'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      name: 'Bu nurjanah',
      email: 'nurjanah@aol.com',
      phone: '08787887612',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pak Sartono',
      email: 'sartono@aol.com',
      phone: '98777878888',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teacher',null,{})
  }
};
