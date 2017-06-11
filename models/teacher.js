'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(value, next) {
          Teacher.find({
            where: { email: value },
            attributes: ['id']
          })
            .done(function (error, user) {
              if (error) {
                return next(error);
              }
              if (user) {
                return next('Email address already in use!');
              }
              next();
            });
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Teacher;
};