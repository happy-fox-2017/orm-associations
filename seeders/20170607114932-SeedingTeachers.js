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
    return queryInterface.bulkInsert('teachers', [
      {"name":"Corrina Adamovitch","email":"cadamovitch0@creativecommons.org","phone":"351-484615-8482","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Fredi Twinterman","email":"ftwinterman1@toplist.cz","phone":"63-206549-3955","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Cortney Rupp","email":"crupp2@mashable.com","phone":"381-796802-8982","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Lief Gillbe","email":"lgillbe3@altervista.org","phone":"234-197912-2902","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Claus Fibben","email":"cfibben4@sogou.com","phone":"62-444-774-4094","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Obidiah Foulstone","email":"ofoulstone5@netvibes.com","phone":"963-891867-2412","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Bunnie Matis","email":"bmatis6@apache.org","phone":"66-889388-2988","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Nerty Branton","email":"nbranton7@reuters.com","phone":"7-522992-6622","createdAt":new Date(),"updatedAt":new Date()},
      {"name":"Hermann Deabill","email":"hdeabill8@si.edu","phone":"62-669583-4188","createdAt":new Date(),"updatedAt":new Date()}
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('teachers', null, {});
  }
};
