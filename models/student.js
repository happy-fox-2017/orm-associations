'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsToMany(models.Teacher, {through: models.StudentTeacher, foreignKey: 'teacher_id' });
      //  Teacher.belongsToMany(models.Student, {through: models.StudentTeacher, foreignKey: 'student_id' });
      }
    }
  });
  return Student;
};