"use strict"

const db = require('./models');
const repl = require('repl');

let replServer = repl.start('>> ');

// var all = db.Student.getAllData((param)=>{
//   param.forEach((paramAja)=>{
//     console.log(`id        : ${paramAja.id}`)
//     console.log(`First Name: ${paramAja.first_name}`);
//     console.log(`Last Name : ${paramAja.last_name}`);
//     console.log(`gender    : ${paramAja.gender}`);
//     console.log(`Birthday  : ${paramAja.birthday}`);
//     console.log(`Email     : ${paramAja.email}`);
//     console.log(`phone     : ${paramAja.phone}`);
//     console.log(`height    : ${paramAja.height}`);
//     console.log(`age       : ${paramAja.getAge()}\n`);
//   })
// })

var all = db.Teacher.getAllData(function(Teachers){
  Teachers.forEach(function(Teacher){
      console.log(`id        : ${Teacher.id}`)
      console.log(`Name      : ${Teacher.name}`);
      console.log(`email     : ${Teacher.email}`);
      console.log(`phone     : ${Teacher.phone}\n`);
  });
});

function create(){
  db.Student.create({
    first_name: 'gogon',
    last_name: 'depok' ,
    gender:'pria' ,
    birthday: '1988-04-18',
    email: 'gogon@yahoo.com',
    phone: '1234577834' ,
    height: 165})
  .then(Student => console.log('data already added!'))
  .catch(err => console.log(err.message))
}

function createTeacher(){
  db.Teacher.create({
    name:'norma',
    email: 'norma@yahoo.com',
    phone: 8758378957 })
  .then(Teachers => console.log('data already added'))
  .catch(err => console.log(err.message));
}

function assignStudent() {
  db.student_teacher.create({
    studentId : 4,
    teacherId : 1 })
  .then(student_teacher => console.log('data already assign'))
  .catch(err => console.log(err.message));
}

let  findTeacher = function(studentId) {
  db.Student.findById(studentId).then(function (find) {
    find.getTeachers().then(function (data) {
      console.log(`Teacher(s): \n`);
      data.forEach(function (get) {
        console.log(`Id: ${get.id}`);
        console.log(`Name: ${get.name}`);
        console.log(`Email: ${get.email}\n`);
      })
    })
  })
}


// function findStudent(teacherId) {
//   db.Teachers.findById(teacherId).then(function (find) {
//     find.getStudents().then(function (data) {
//       console.log(`Student(s): \n`);
//       data.forEach(function (get) {
//         console.log(`Id: ${get.id}`);
//         console.log(`First Name: ${get.first_name}`);
//         console.log(`Last Name: ${get.last_name}\n`);
//       })
//     })
//   })
// }
// findStudent(1);

replServer.context.create = create;
replServer.context.createTeacher = createTeacher;
replServer.context.assignStudent = assignStudent;
replServer.context.findTeacher = findTeacher;

