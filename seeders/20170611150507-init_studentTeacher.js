'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('StudentTeachers', [
      {
        StudentId:4,
        TeacherId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        StudentId:5,
        TeacherId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        StudentId:6,
        TeacherId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        StudentId:4,
        TeacherId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        StudentId:5,
        TeacherId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        StudentId:7,
        TeacherId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('StudentTeachers', null, {});
  }
};
