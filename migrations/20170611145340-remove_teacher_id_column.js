'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students', 'teacher_id')
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Students', 'teacher_id', Sequelize.STRING)
  }
};
