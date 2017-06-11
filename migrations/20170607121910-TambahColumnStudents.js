'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Students',
      'TeacherId',
      {
        type : Sequelize.STRING
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students', 'TeacherId');
  }
};
