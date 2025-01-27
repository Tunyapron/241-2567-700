//  console.log('Hello world');
//  console.log('Hello worlddddddd')
//  prompt('What is your name) -> เป็นช่องข้อความเด้งขึ้น

// String, Number, Boolean, Object, Array ---------------------------------------
// String
// let จะปรับเปลี่ยนค่าให้กับตัวแปรได้
//  let firstname = 'John';

//  console.log(firstname); // จะออกตัวแปรด้านบน
// Number
//  let age = 25;
//  let height = 5.9;

// Boolean
//  let isMarried = false;
//  firstname = 'xxxx' 
//  console.log('my name is ', firstname, 'and I am', age, 'years old.');


/* + - * / % */

// let number1 = 5;
// let number2 = 10;
//  let result = number1 + number2;
//  console.log(result);  

// สามารถเอา string มาต่อกันได้
//  let number1 = '4';
//  let number2 = '8';
//  let result = number1 + number2;
//  console.log('new number is',result); // 48


/* == != > < >= <= */

//  let number1 = 5;
//  let number2 = 3;
//  let condition1 = number1 == number2; // Boolean ค่าที่ได้จะเป็น true หรือ false
//  console.log('result of condition is',condition1);

// if - else condition ---------------------------------------

//  let number1 = 5;
//  let number2 = 5;

//  if (number1 != number2) {
//     console.log('this is if');
//  } else if (number1 == number2) {
//    console.log('this is else if');
//  } else {
//    console.log('this is else');
//}

/*  >= 80 grade A
    >= 70 grade B
    >= 60 grade C
    >= 50 grade D
*/ 
// let score = prompt('Enter your score: ');
// console.log('Your score is', +score);
// // if - else condition
// if (score >= 80) {
//     console.log('You are grade A');
// } else if (score >= 70) {  
//     console.log('You are grade B');
// } else if (score >= 60) {
//     console.log('You are grade C');
// } else if (score >= 50) {
//     console.log('You are grade D');
// } else {
//     console.log('You are grade F');
// }

/*  && และ 
    || หรือ 
    ! not ไม่ */

//  let number1 = 5;
//  let number2 = 8;

// true && true = true
// let condition = number1 >= 3 && number2 >= 5;
// console.log('result of condition is',condition);

// true || false = true
// let condition = number1 >= 3 || number2 >= 10;
// console.log('result of condition is',condition);


// let age = 30;
// let gender = 'male';

// // true && true = true
// if (age >= 20 && gender == 'male') {
//     console.log('You are male adult');
// }


// let number = 25;
// // true || false = !(true) = false
// if (!(number % 2 == 0)) {  // หาร 2 ไม่ลงตัว จะแสดงออกมา
//     console.log('You are even number');
// }


// Loop ---------------------------------------
// let count = 0;

// while (count < 10) { // true
//     console.log('While loop');
//     count++; // count = count + 1
// }


// let count = 0;
// for (let count = 0; count < 10; count++) {
//     console.log('For loop');
// }

// Array ---------------------------------------

// let age1 = 20;
// let age2 = 30;
// let age3 = 40;
// let age4 = 50;
// console.log(age1, age2, age3, age4);

// let ages = [30, 35, 40];
// console.log('new ages', ages[2]);
// console.log('ages list', ages);

// // 1. แทนที่ค่าในอาเรย์
// ages = [45, 50];
// console.log('new ages', ages);

// // 2. การเพิ่มค่าในอาเรย์ (ต่อท้าย)
// ages.push(55);
// console.log('new ages', ages);

// // 3. การลบค่าในอาเรย์
// ages.pop(55);
// console.log('new ages', ages);

// let ages = [30, 35, 40, 45, 50];
// if (!ages.includes(40)) { // ถ้าไม่มีค่า 40 ในอาเรย์ จะแสดงออกมา 
//     console.log('You have to be 40');
// }

// let ages = [90, 60, 40, 45, 50];
// console.log(ages);
// ages.sort(); // เรียงค่าจากน้อยไปมาก
// console.log(ages);

// let names_list = ['John', 'Jane', 'Doe', 'Smith'];
// names_list.push('Minnie');  // เพิ่มค่าในอาเรย์
// console.log(names_list);
// console.log(names_list.length); // จำนวนค่าในอาเรย์
// console.log(names_list[2]); // แสดงค่าในอาเรย์ตำแหน่งที่ 2

// for (let index = 0; index < names_list.length; index++) { // วนลูปอาเรย์ จนครบทุกค่า 
//     console.log('name list',names_list[index]); // แสดงค่าในอาเรย์ ตำแหน่งที่ index 
// }

// Object ---------------------------------------
// let student = [{
//     name: 'Harry',
//     age: 90,
//     grade: 'A'
// }, {
//     name: 'John',
//     age: 30,
//     grade: 'B'
// }];

// //  student.push({ // เพิ่มค่าในobject
// //     name: 'Nancy',
// //     age: 40,
// //     grade: 'C'
// //  });

//  student.pop(); // ลบค่าใน object สุดท้าย

// for (let index = 0; index < student.length; index++) { 
//     console.log('Student number', (index + 1));  
//     console.log('name', student[index].name); // แสดงค่าในอาเรย์ ตำแหน่งที่ index 
//     console.log('age', student[index].age);
//     console.log('grade', student[index].grade);
// }

// object + array ---------------------------------------

//let scores1 = 50
//let scores2 = 90
//let grades = '' // ประกาศตัวแปร grades ให้เป็น string ว่าง 

// ประกาศ function ชื่อ calculateGrade ที่มี parameter ชื่อ scores
// function calculateGrade(scores) { 
//     if (scores >= 80) {
//         grades = 'A';
//     } else if (scores >= 70) {      
//         grades = 'B';
//     } else if (scores >= 60) {
//         grades = 'C';
//     } else if (scores >= 50) {
//         grades = 'D';
//     } else {
//         grades = 'F';
//     }
//     return grades; // คืนค่า grades ออกมา 
// }


// let student1 = calculateGrade(scores1); //  เรียกใช้ function โดยใส่ค่า scores1 เข้าไป
// let student2 = calculateGrade(scores2); //  เรียกใช้ function โดยใส่ค่า scores2 เข้าไป
// console.log('grade:', student1, student2); // แสดงค่า grades ออกมา

// arrow function ---------------------------------------
// let calculateGrade = (scores) => {  // ใช้ได้เหมือนกันกับ function แต่เขียนแบบย่อ 
//     if (scores >= 80) {
//         grades = 'A';
//     } else if (scores >= 70) {      
//         grades = 'B';
//     } else if (scores >= 60) {
//         grades = 'C';
//     } else if (scores >= 50) {
//         grades = 'D';
//     } else {
//         grades = 'F';
//     }
//     return grades; // คืนค่า grades ออกมา 
// }


// let student1 = calculateGrade(scores1); //  เรียกใช้ function โดยใส่ค่า scores1 เข้าไป
// let student2 = calculateGrade(scores2); //  เรียกใช้ function โดยใส่ค่า scores2 เข้าไป
// console.log('grade:', student1, student2); // แสดงค่า grades ออกมา

/* array again */
// let scores = [10, 20, 30, 40, 50];
// for (let index = 0; index < scores.length; index++) {
//     console.log(scores[index]); 
// }


// scores[0] = scores[0] * 2;
// scores[1] = scores[1] * 2;
// scores[2] = scores[2] * 2;
// scores[3] = scores[3] * 2;
// scores[4] = scores[4] * 2;
// ผลลัพธ์ที่ออกมาจะเหมือนกันกับการใช้ map ด้านล่าง
// scores = scores.map((score) => { // วนลูปอาเรย์ โดยใช้ map และใส่ parameter ชื่อ score จะเขียนสั้นกว่า
//     return score * 2; // คืนค่า score * 2 ออกมา
// });

// scores.forEach((score) => { // วนลูปอาเรย์ โดยใช้ forEach และใส่ parameter ชื่อ score จะเขียนสั้นกว่า
//     console.log(score);
// });


// let scores = [10, 20, 30, 40];
// let newScores = [];
// for (let index = 0; index < scores.length; index++) {
//    console.log('Score',scores[index]); 
//    if (scores[index] >= 30) { // ถ้าค่าในอาเรย์มากกว่าหรือเท่ากับ 30 จะเข้าเงื่อนไข 
//        newScores.push(scores[index]); // ค่าที่มากกว่าหรือเท่ากับ 30 จะเข้าไปในอาเรย์ newScores
//    }
// }

// newScores.forEach((ns) => {
//     console.log('New score',ns); // จะแสดงออกมาตรงนี้
// });

/// แบบสั้น แบบย่อ 
// let scores = [10, 20, 30, 40];
//  for (let index = 0; index < scores.length; index++) {
//     console.log('Score',scores[index]); }

// let newScores = scores.filter((score) => { // วนลูปอาเรย์ โดยใช้ filter และใส่ parameter ชื่อ score จะเขียนสั้นกว่า   
//     return score >= 20; // คืนค่า score ที่มากกว่าหรือเท่ากับ 30 ออกมา
// });

// newScores.forEach((ns) => {
//     console.log('New score',ns); 
// });


// object function ---------------------------------------


// let students = [
//         {
//     name: "John",
//     score: 90,
//     grade: 'A',
//     },
//     {
//     name: "Doe",
//     score: 50,
//     grade: 'D',
//     },
//     {
//     name: "Smith",
//     score: 70,
//     grade: 'B',
//     },
//     {
//     name: "Jane",
//     score: 60,
//     grade: 'C',
//     }
//     ]
//     let student = students.find((s) => {
//         if(s.name == 'Doe'){
//             return true;
//         }
//     });
//     let doubleScore_student = students.map((s) => {
//         s.score = s.score * 2;
//     })
//     let highScore_student = students.filter((s) => {
//         if(s.score >= 80){
//             return true;
//         }
//     })
//     console.log('student', student)
//     console.log('high score student', highScore_student)