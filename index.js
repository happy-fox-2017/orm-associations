"use strict"
const db = require('./models');
const repl = require('repl');

function findFullnameAndAge(){
  db.Student.findAll().then(students => {
    students.forEach(student =>{
      console.log(`${student.getFullName()} dengan Umur ${student.getAge()}`);
    })
  })
  .catch(err => {
    console.log(err);
  })
}

function addDataStudent() {
  db.Student.create({
    first_name : "asdasd",
    last_name : "Nugraha",
    gender : "Male",
    birthday : "1955-12-12",
    email : "antoniangga14@gmail.com",
    phone : "0812123123124",
    tinggi_badan : 150,
    createdAt : new Date(),
    updateAt : new Date()
  }).then(datas =>{
    console.log("Sukses Inserted");
  }).catch(err =>{
    console.log(err.message);
  })
}

function addDataTeacher() {
  db.Teacher.create({
    name : "Jhon Doe",
    email : "asdasdasd@gmail.com",
    phone : "0812123123124",
    createdAt : new Date(),
    updateAt : new Date()
  }).then(datas =>{
    console.log("Sukses Inserted");
  }).catch(err =>{
    console.log(err.message);
  })
}

function getStudentToTeachers(){
  db.Student
  .findAll()
  .then(Students =>{
    Students.forEach(Student =>{
      console.log("first_name : "+Student.first_name);
      console.log("last_name  : "+Student.last_name);
      console.log("gender : "+Student.gender);
      console.log("birthday : "+Student.birthday);
      console.log("Email : "+Student.email);
      console.log("Phone : "+Student.phone);
      console.log("tinggi_badan : "+Student.tinggi_badan);
      console.log("\n");
      Student.getTeachers()
      .then(Teachers =>{
        Teachers.forEach(Teacher =>{
          console.log("Teacher name :"+Teacher.name);
        })
      })
    })
  })
}

function getTeachersToStudent() {
  db.Teacher
  .findAll()
  .then(Teachers => {
    Teachers.forEach(Teacher =>{
      console.log("name :"+Teacher.name);
      console.log("email :"+Teacher.email);
      Teacher.getStudents()
      .then(Students =>{
        Students.forEach(Student =>{
          console.log("first_name : "+Student.first_name);
          console.log("last_name  : "+Student.last_name);
          console.log("gender : "+Student.gender);
          console.log("birthday : "+Student.birthday);
          console.log("Email : "+Student.email);
          console.log("Phone : "+Student.phone);
          console.log("tinggi_badan : "+Student.tinggi_badan);
          console.log("\n");
        })
      })
    })
  })
}


const replServer = repl.start(">");

replServer.context.findFullnameAndAge = findFullnameAndAge;
replServer.context.getAllData = db.Student.getAllData;
replServer.context.addDataStudent = addDataStudent;
replServer.context.getStudentToTeachers = getStudentToTeachers;
replServer.context.getTeachersToStudent = getTeachersToStudent;
