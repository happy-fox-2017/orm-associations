'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_Teacher = sequelize.define('Student_Teacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student_Teacher.belongsTo(models.Teacher, {
          foreignKey : "TeacherId"
        }),
        Student_Teacher.belongsTo(models.Student,{
          foreignKey : "StudentId"
        })
      }
    }
  });
  return Student_Teacher;
};