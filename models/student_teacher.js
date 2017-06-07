'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_Teacher = sequelize.define('Student_Teacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    }
  });
  return Student_Teacher;
};