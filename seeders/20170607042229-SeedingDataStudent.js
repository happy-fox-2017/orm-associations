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
    return queryInterface.bulkInsert('students', [{
      first_name  : "Antoni",
      last_name   : "Angga",
      gender      : "Male",
      birthday    : "1995-04-15",
      phone       : "081294373359",
      createdAt   : new Date(),
      updatedAt   : new Date(),
      email       : "antoniangga14@gmail.com",
      tinggi_badan: 176,
      TeacherId   : 2
    },{
      first_name : "Jhon",
      last_name  : "Doe",
      gender     : "Female",
      birthday   : "1994-11-14",
      phone      : "081294373359",
      createdAt  : new Date(),
      updatedAt  : new Date(),
      email      : "JhonDoe@gmail.com",
      tinggi_badan: 160,
      TeacherId  : 1
    },{
      first_name : "Ade",
      last_name  : "Nugraha",
      gender     : "Female",
      birthday   : "1994-11-14",
      phone      : "081294373359",
      createdAt  : new Date(),
      updatedAt  : new Date(),
      email      : "AdeNugraha@gmail.com",
      tinggi_badan: 160,
      TeacherId  : 4
    },{
      first_name : "James",
      last_name  : "Gorge",
      gender     : "Male",
      birthday   : "1994-11-14",
      phone      : "0812312234213",
      createdAt  : new Date(),
      updatedAt  : new Date(),
      email      : "JamesGorge@gmail.com",
      tinggi_badan: 160,
      TeacherId  : 9
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('students', null, {});
  }
};
