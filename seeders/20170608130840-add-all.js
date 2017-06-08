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
      return [queryInterface.bulkInsert ('Students', [{
        first_name: 'Andrew',
        last_name: 'Senewe',
        birthdate: new Date('1994-03-31'),
        createdAt: new Date,
        updatedAt: new Date
      }], {}),
      queryInterface.bulkInsert('Teachers', [{
        name: 'Ells Schön',
        email: 'ells@gmail.com',
        phone: '081234566543',
        createdAt: new Date,
        updatedAt: new Date
      }], {}),
      queryInterface.bulkInsert ('Student-Teachers', [{
        TeacherId:1,
        StudentId:1,
        createdAt:new Date,
        updatedAt:new Date
      }], {})
    ]


  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
