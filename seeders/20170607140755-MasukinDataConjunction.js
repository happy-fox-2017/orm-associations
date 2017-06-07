'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('student_teachers', [{
      StudentId: 1,
      TeacherId: 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 4,
      TeacherId: 3,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 4,
      TeacherId: 3,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 2,
      TeacherId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 5,
      TeacherId: 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 6,
      TeacherId: 5,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 5,
      TeacherId: 5,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 6,
      TeacherId: 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 9,
      TeacherId: 4,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      StudentId: 2,
      TeacherId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('student_teachers', null, {});
  }
};
