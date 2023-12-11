// DataTypes Convertion && Operation 


// ************************** Convertion *********************************** 

// let score = 45;
// let score = "45abc";
// let score = null;
// let score = undefined;
// let score = true;
let score = false;

// console.log(typeof score);
// console.log(typeof (score));

let valueInNum = Number(score);
let valueInString = String(score);

// console.log("Value in Num: ", typeof valueInNum);
// console.log(valueInNum);

// console.log("Value in String: ", typeof valueInString);
// console.log(valueInString)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0



// let isLoggedIn = 1;
// let isLoggedIn = 0; 
// let isLoggedIn = " ";
// let isLoggedIn = "";
// let isLoggedIn = 0;
let isLoggedIn = "Sandy";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//  1 => true; 0 => false
// "" => false
// "Sandy" => true


let number = 55;

// console.log(number);
// console.log(typeof number);
let stringNumber = String(number);
// console.log(stringNumber);
// console.log(typeof stringNumber);





// *************************************** Operation *********************************** 
// Operators in javascript 
// 01. Arithmetic 
// 02. Assignment 
// 03. Comparision 
// 04. Bitwise

// 05. Logical 
//    AND[&&] -> ALL Condition true 
//    OR[||] -> any Single condition true 
//    NOT[!] -> treu -> false and false -> true 


let value = 5;
let negNalue = -value;

// console.log(negNalue);

// console.log(4+4);
// console.log(4-4);
// console.log(4*4);
// console.log(4**2);
// console.log(4/2);
// console.log(4%2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3;      // code readability is not good 
num1 = num2 = num3;

//  Prefix && Postfix operators 
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


let gameCounter = 200;
// ++gameCounter;
gameCounter++;
// console.log(gameCounter);




// Equality Operator 
let nums = 3;
let str = '3';
console.log(nums == str);        // loose equality
console.log(num === str);       // strict equality


// Ternary Operator
let age = 18;
let status = (age >= 18) ? 'I can vote' : 'cannot vote';
console.log(status);


// falsy and truethy values 
// 1.  Falsey -> undefined, null, 0, false, NaN 
// 2. Truethy - anything that is not falsy
console.log(false || 'sandy')    // ['sandy' is NON Boolean]
console.log(false || true)
console.log(false || 7 || false)




// Operator Precedence
// let c = a + b * d / e;
// // OR solve with easy way
// let f = (a + (b * d) / e);