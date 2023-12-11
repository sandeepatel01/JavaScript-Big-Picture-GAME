"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3
    +
    3) // code readability should be high

console.log("Sandy"); console.log("Sandeep")    // code readability is not good


let name = "Sandy"
let age = 18
let isLoggedIn = false
let state;


//  1. Primitive DataTypes in JS 
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value  // represent the emty value
let newuser = null;
// undefined => 
let user;
// symbol => unique


// 2. Reference DataTypes IN JS 
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

// 3. Dynamic DataType 
let a = 6;
a = "Sandy";
console.log(a)


console.log(typeof "Sandeep");
console.log(typeof age)
console.log(typeof undefined); // undefined
console.log(typeof null); // object