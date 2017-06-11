'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: 
    {
      type : DataTypes.STRING,
      validate : {
        isEmail :{
          args : true,
          msg : "Must be Email type Exmaple <test@gmail.com>"
        },
        isUnique: function(value, next){
          var self = this;
          Teacher.find({where: {email: value}})
          .then(function(teacher) {
            if (teacher && self.id !== teacher.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
        isAlphanumeric : {
          args : false,
          msg : "Phone not allow Alpanumberic"
        },
        len :{
          args : [10,13],
          msg : "Phone must be length 10 until 13"
        },
        isNumeric :{
          args : true,
          msg : "Phone not allow letter"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student, {
          through : 'Student_Teachers',
          foreignKey : 'TeacherId'
        })
      }
    }
  });
  return Teacher;
};