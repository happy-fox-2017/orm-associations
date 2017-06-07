"use strict"
const db = require('./models');

function findFirstName(){
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


// ini untuk sebelum conjungtion
// function getAssocationTableTeacherToStudent(){
//   db.Teacher
//   .findAll()
//   .then(Teachers =>{
//     Teachers.forEach(Teach =>{
//       //console.log(Teach.name);
//       Teach.getStudents()
//       .then(Students =>{
//         Students.forEach(stud =>{
//           console.log("Ini Guru nya "+ Teach.name);
//           console.log("Ini Student nya "+stud.first_name);
//         })
//       })
//     })
//   })
// }

// function getAssocationTableStudentToTeacher() {
//   db.Student
//   .findAll()
//   .then(Students =>{
//     Students.forEach(Stud =>{
//       console.log(Stud.first_name);
//       Stud.getTeacher()
//       .then(Teacher =>{
//         console.log(Stud.first_name);
//         console.log(Teacher.name);
//       })
//     })
//   })
// }



//findFirstName();
//db.Student.getAllData();
//addDataStudent();
//getAssocationTableTeacherToStudent()
getAssocationTableStudentToTeacher();
