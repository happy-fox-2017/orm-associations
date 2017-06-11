'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        StudentTeacher.belongsTo(models.Teacher, {foreignKey: 'TeacherId'})
        StudentTeacher.belongsTo(models.Student, {foreignKey: 'StudentId'})
      }
    }
  });
  return StudentTeacher;
};
