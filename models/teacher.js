'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail:{
          args:true,
          msg:"Email format incorrect"
        },
        isUniqued: (value,next) => {
          Teacher.findAll({ where: {email: value} })
          .then((data) => {
            if (data.length > 0) {
              return next("email already exist");
            }else {
              return next();
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        isAlphanumeric: {
          args: false,
          msg: "Phone must numeric"
        },
        isNumeric: {
          args:true,
          msg: "phone not allow letter"
        },
        len: {
          args: [10,13],
          msg: "phone length must be 10-13"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student,{through: "Student_teacher",foreignKey:'teacherId'});
      },
      getAllData: function(callback){
        Teacher.findAll().then(function(data){
          data.forEach((value) => {});
          return callback(data)
        });
      }
    }
  });
  return Teacher;
};