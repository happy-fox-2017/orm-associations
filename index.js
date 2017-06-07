"use strict"

const db = require('./models')
const repl = require('repl')
const replServer = repl.start('>> ')

function viewTeachers() {
  db.Teacher.findAll()
  .then(teachers => {
    teachers.forEach(teacher => {
      teacher.getStudents()
      .then(_students => {
        console.log(`Gurunya adalah ${teacher.name}`);
        _students.forEach(student => {
          console.log(`first name : ${student.first_name}`);
          console.log(`last name : ${student.last_name}`);
          console.log(`gender : ${student.gender}`);
          console.log(`birthday : ${student.birthday}`);
          console.log(`height : ${student.height}`);
          console.log(`email : ${student.email}`);
          console.log(`phone : ${student.phone}`);
          console.log(`teacher : ${student.teacher_id}`);
          console.log(`\n`);
        })
      })
    })
  })
}

function viewStudent(id) {
  db.Student.findById(id)
  .then(student => {
    console.log(`Murid ${student.first_name}`);
    db.Teacher.findById(student.teacher_id)
    .then(teacher => {
      console.log(`gurunya adalah ${teacher.name}`);
    })
  })
}




replServer.context.viewTeachers = viewTeachers
replServer.context.viewStudent = viewStudent

// replServer.context.delete = 