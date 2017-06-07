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
    return queryInterface.bulkInsert('Students', [{
      first_name : 'hilma',
      last_name : 'fauzi',
      gender: 'female',
      height: 160,
      teacher_id: 1,
      email: 'hilma@outlook.com',
      phone: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name : 'ali',
      last_name : 'fauzi',
      gender: 'male',
      height: 170,
      teacher_id: 2,
      email: 'ali@outlook.com',
      phone: '22222222222',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name : 'deden',
      last_name : 'marsudi',
      gender: 'female',
      height: 168,
      teacher_id: 1,
      email: 'deden@outlook.com',
      phone: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name : 'sore',
      last_name : 'fauzi',
      gender: 'female',
      height: 168,
      teacher_id: 2,
      email: 'sore@outlook.com',
      phone: '11111111111',
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
    return queryInterface.bulkDelete('Student',null,{})
  }
};
