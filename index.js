"use strict"

const db = require('./models')
const repl = require('repl')
const replServer = repl.start('>> ')

function showStudents() {
  db.Teacher.findAll()
  .then(teachers => {
    teachers.forEach(teacher => {
      teacher.getStudents()
      .then(_students => {
        console.log(`${teacher.name} Mempunyai murid :`);
        _students.forEach((student,i) => {
          console.log(`${i}.${student.first_name} ${student.last_name}`);
        })
        console.log(`\n`);
      })
    })
  })
}


function showTeachers() {
  db.Student.findAll()
    .then(students => {
      students.forEach(student => {
        student.getTeachers()
          .then((teachers) => {
            console.log(`${student.first_name} ${student.last_name} Merupakan murid dari:`);
            teachers.forEach((teacher,i) => {
              console.log(`${i}.${teacher.name}`);
            });
            console.log(`\n`);
          });
      });
    });
  }



replServer.context.showTeachers = showTeachers
replServer.context.showStudents = showStudents
// replServer.context.showTeachers = showTeachers

// replServer.context.delete =
