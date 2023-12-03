console.log("this is external JS file")

// Variables in js 
let num = 6;
console.log(num)

{
    let num1 = 2;
    var num2 = 4;

    console.log(num1);
    console.log(num2);
}
// console.log(num1);   // not posible
console.log(num2)

// Datatypes in javascript 
// 1. Primitive types 
// String
// Number
// Boolean
// undefined
// Null


// 2. Dynamic Type 
let a = 6;
a = "Sandy";

console.log(a)

// 3. Reference Types 
//  Objects 
let persion = {
    name: "sandy",
    age: 20,
    lastName: "Patel"
}
console.log(persion.name)
console.log(persion.age)

//  Arrays
let students = ["Sandeep", "Amit", "Vikash", "Aman", "Piyush"]
console.log(students[0])
console.log(students[4])
//  Function 


// Operators in javascript 
// 01. Arithmetic 
// 02. Assignment 
// 03. Comparision 
// 04. Bitwise

// 05. Logical 
//    AND[&&] -> ALL Condition true 
//    OR[||] -> any Single condition true 
//    NOT[!] -> treu -> false and false -> true 


// Pre-increment operator 
let number = 5;
console.log(++number)

// Post-increment operator 
let number2 = 5;
console.log(number2++);
console.log(number2)


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


// Control Statement 
// 1. if-else 
let marks = 79;
if (marks >= 98) {
    console.log("A")
} else if (marks >= 90) {
    console.log("B");
} else if (marks >= 80) {
    console.log("C")
} else {
    console.log("D")
}

// 2. switch 
let days = "Sat";

switch (days) {
    case "Mon": console.log("go to maths class 😊");
        break;
    case "Tues": console.log("got to coding class 💪");
        break;
    case "Wed": console.log("go to Phy class 🥲");
        break;
    case "Thus": console.log("go to wed developments class ❤️");
        break;
    case "Fri": console.log("go to DSA Class 📚");
        break;
    case "Sat": console.log("Weekend😁");
        break;
    default: console.log("👨‍💻");
}



// Loop in Javascript 
// 1. for loop 
for(let i=0; i<=10; i++){
    // console.log("Sandy" + i);
}

// 2. while loop
let i = 1;
while (i<5) {
    // console.log(i);
    i++;
}

// 3. Do-while loop 
let j = 0;
do{
    console.log(j);
    j++;
}while(j<=10);

// 4. Infinite loop [what is an infinite loop] 
// 5. for-in loop 
// 6. for-of loop 