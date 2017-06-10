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
      name: 'Johny',
      email: 'john1@gmail.com',
      phone: '32432423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jonis',
      email: 'johnis@gmail.com',
      phone: '324324342423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Josic',
      email: 'Josic@gmail.com',
      phone: '32432342432423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Johdon',
      email: 'Johdon@gmail.com',
      phone: '3243243242423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'joson',
      email: 'Joson@gmail.com',
      phone: '343242423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jikoon',
      email: 'Jikoon@gmail.com',
      phone: '3243242423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jimon',
      email: 'Jimon@gmail.com',
      phone: '332423243242423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jaman',
      email: 'Jaman@gmail.com',
      phone: '4535243242423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jonion',
      email: 'Jonion@gmail.com',
      phone: '987743242423890',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
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
