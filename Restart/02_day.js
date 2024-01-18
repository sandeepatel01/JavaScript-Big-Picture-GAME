// Variables in JavaScript 
//  1. var 
// 2. const 
// 3. let  constly used 

const productId = 1234;
var userpASSWORD = '7880784204';
let userEmail = "google@gmail.com";


// console.table([productId, userEmail, userpASSWORD]);



// Datatypes in JavasScript 
//    1. Primitive datatypes 
//           Number
//           String
//           Boolean
//           null 
//           undefined 
//           Bigint 

//     2. Reference datatypes 
//            Object
//            Array
//            Function      

// console.log(typeof "Sandy");
// console.log(typeof userpASSWORD);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof productId);


// ************* Conversion  in JavaScript *************** 

// let gameScore = 33;
// let gameScore = "33";
let gameScore = "33aaa";

// console.log(typeof (gameScore));
// console.log(typeof gameScore);

let valueInNumber = Number(gameScore);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// let isLogout = 1;
// let isLogout = 0;
// let isLogout = "";
// let isLogout = " ";
// let isLogout = 2;
// let isLogout = 3;
let isLogout = "Sandy";

let valueInBoolean = Boolean(isLogout);
// console.log(typeof valueInBoolean);
// console.log(valueInBoolean);


let number = 51;

// console.log(number);
// console.log(typeof number);

let valueInString = String(number);
// console.log(typeof valueInString);
// console.log(valueInString);




// ******************* Operation *********************** 

let value = 5;
let negativeValue = -value;

// console.log(negativeValue);

// console.log(2 ** 3);
// console.log(2 / 4);
// console.log(2 % 3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + 2 + "3");
// console.log("1" + 2 + 3);

// console.log(true);
// console.log(+true);

// console.log(+"");
// console.log(+false);

// Pre-increment operator 
let numbers = 5;
let num = ++numbers;
console.log(num);
console.log(numbers);

// Post-increment operator 
let number2 = 5;
let numb2 = number2++;
console.log(numb2);
console.log(number2)