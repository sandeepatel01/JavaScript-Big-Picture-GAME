# JavaScript

## 1. JS the Language

           1.  JS = Language
           2. managed by EcmaScript →
                          naye features, puraane hatana, kharaab features sahi
                          arna and overall development of js.

- JS the language = code likhna seekhna, main features
- JS the dom = code likhkar cheejein banana seekhna

## 2. Basics

- file connect karege and load karege script ko,
- basics of code execution,
- grammar and understanding of errors

## 3. Inbuilt features

- Browser Inbuild

1. console

```jsx
// console. log
console.log("Sandeep Patel");
// console. warn
console.warn("Sandeep Patel");
// console.error
console.erro("Sandeep Patel");
```

2. alert

```jsx
alert(" hely");
```

3. prompt

```jsx
// prompt alert ka bhai hai jo ki alert se ek kadam aage hai
prompt("hello");
```

## 4. Variables & constants

- har programming lang mein data se deal karna hota hai, wo alag alag prakaar ka data ho sakta hai, ab aisa data jisse humein deal karna hai, wo save to krna padega na, to wo data save krne ke 1 iye hume koi saving space chahiye jaha par data save hojaayel and ye save krne ke liye unhe kuchh naam bhi dena padega and isiliye humein variables and constants banaane padte hai taaki data save hojaae and unka koi naam bhi ho taaki hum baad mein unhe access kar paaye
- variables and constants hote hai data store krne ke liye and variables mein data store hota hai and change bhi hojaata hai and constants mein data store and change nahi hota and dono hi browser par memory lete hai and browser RAM par chalta hai to technically dono RAM par chalte hai ya fir space lete hai

```jsx
var a = 12;
var b = 32;
const c = 67;
```

- Variable in JS

```jsx
// let, const && var Uses

const accountId = 123456;
let accountEmail = "sandy@gmail.com";
var accountPassword = "12345";
accountCity = "Bareilly"; // bad Practice
let accountState;

// accountId = 01;  // Not allowed

console.log(accountId);

accountEmail = "sp@sp.com";
accountPassword = "01010101";
accountCity = "Bangaluru";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
```

## 5. Compilers and interpreters

- JS language english words use krti hai and computers english nahi samjhte, wo samajhte hai 0 and 1 jisko current flow and current bypass bhi kah skte ho, and hum chaahte hai hum english mein likhke comp se baat krle, to hum ek translator lagaayege jo ki humara code english mein lega and use 0 and 1 mein convert kr dega,
- compiler and interpreter translators hai jo ki english code ko convert kr rhe hai machine code mein, JS mein interpreter hota hai
- java - compiler
- jit compiler[ dev by → google ] - interpreter ki shuraati taakat use krta hai and compiler ki running taakat use krta hai

## 6. Window

- there are many features which are frquently used in js and they are not the part of js, they are not the part of js the language but they are available in the browser, and when you use them in js they are called from the browser and not js
- window ek bucket samajh Io jismein saari wo cheeje available hai jo browser deta hai js mein use krne ke liye kyoki wo saari cheejein js ka part nahi balki browser ka part hai which is available to use in js, we can also they're provided by browser to use in js, all these features which are made available via browser are put inside windo

## 7. Types

- Types - primitive DT I I reference DT

1. 12, a, 12.4, harsh, true, null, undefined → Primitive DT
2. [ ], ( ), { } → reference DT

```jsx
var a = 12;
var a = 12.1;
var a = trure;
var a = [];
var a = false;
var a = null;
var a = undefined;
var a = function () {};

var arr = [1, 2, 3, 4, 5, 6];
var b = arr;
b.pop();

// spread
var ar = [12, 13, 14, 15];
var gh = [1, 2, 3];
var ba = [...gh];
ba.pop();
```

1. Datatypes in JS

```jsx
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Sandy");
console.log("Sandeep"); // code readability is not good

let name = "Sandy";
let age = 18;
let isLoggedIn = false;
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
  lastName: "Patel",
};
console.log(persion.name);
console.log(persion.age);

//  Arrays
let students = ["Sandeep", "Amit", "Vikash", "Aman", "Piyush"];
console.log(students[0]);
console.log(students[4]);
//  Function

// 3. Dynamic DataType
let a = 6;
a = "Sandy";
console.log(a);

console.log(typeof "Sandeep");
console.log(typeof age);
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

2. DataTypes Conversions && Operations IN JS

```jsx
// DataTypes Conversion && Operation

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

let num1, num2, num3; // code readability is not good
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
console.log(number2);

let gameCounter = 200;
// ++gameCounter;
gameCounter++;
// console.log(gameCounter);

// Equality Operator
let nums = 3;
let str = "3";
console.log(nums == str); // loose equality
console.log(num === str); // strict equality

// Ternary Operator
let age = 18;
let status = age >= 18 ? "I can vote" : "cannot vote";
console.log(status);

// falsy and truethy values
// 1.  Falsey -> undefined, null, 0, false, NaN
// 2. Truethy - anything that is not falsy
console.log(false || "sandy"); // ['sandy' is NON Boolean]
console.log(false || true);
console.log(false || 7 || false);

// Operator Precedence
// let c = a + b * d / e;
// // OR solve with easy way
// let f = (a + (b * d) / e);
```

3. Comparison

```jsx
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  Strict equality check

console.log("2" === 2);
```

4. DataTypes - Summary

```jsx
//  Primitive - call by value
//  7 types : String,
//   Number,
//    Boolean,
//    null,
//    undefined,
//    Symbol,
//    BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive) - call by referance

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "sandy",
  age: 22,
};

const myFunction = function () {
  // console.log("Hello world");
};

// console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// **************** memory in javascript *************
//  1. Stack(Primitive)

let myName = "Sandeepatel";
let anotherName = myName;
anotherName = "chaiwithSandy";

// console.log(myName);
// console.log(anotherName);

//  2. Heap(Non primitive)

let userOne = {
  email: "user@user.com",
  password: "user@123",
};

let userTwo = userOne;

// console.log(userOne);
// console.log(userTwo);
// console.table([userOne, userTwo])

userTwo.email = "sandy@gmail.com";

console.log(userTwo.email);
console.log(userTwo.email);
```

## 8. String IN JS

```jsx
const name = "sandeep";
const repoCount = 50;

// console.log(name + repoCount + " Value");   // Bad Practice

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sandeep-pt");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4);
console.log(anotherString);

const newStringOne = "   sandeep    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sandeep.com/sandeep%20patel";

console.log(url.replace("%20", "_"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
```

# 9. Numbers IN JS

```jsx
const score = 600;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(5));

const bankBalance = 125.865;
console.log(bankBalance.toPrecision(4));

const newBalance = 1000000;
console.log(newBalance.toLocaleString());
console.log(newBalance.toLocaleString("en-IN"));

const num1 = Number.MAX_SAFE_INTEGER;
const num2 = Number.MIN_VALUE;
const num3 = Number.isInteger;
const num4 = Number.MAX_VALUE;
const num5 = Number.NEGATIVE_INFINITY;
const num6 = Number.POSITIVE_INFINITY;

console.table([num1, num2, num3, num4, num5, num6]);
```

## 10. Maths IN JS

```jsx
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```

## 11. Date IN JS

```jsx
// dates  in javaScript

let todate = new Date();

// console.log(todate);
// console.log(todate.getDate());
// console.log(todate.getDay());
// console.log(todate.getFullYear());
// console.log(todate.getHours());
// console.log(todate.getMilliseconds());
// console.log(todate.getMinutes());
// console.log(todate.getMonth());
// console.log(todate.getMonth());
// console.log(todate.getMonth() + 1);
// console.log(todate.getSeconds());
// console.log(todate.getTime());
// console.log(todate.getTimezoneOffset());
// console.log(todate.getUTCDate());
// console.log(todate.getUTCDay());

// console.log(todate.toString());
// console.log(todate.setDate());
// console.log(todate.Date());

// console.log(todate.toDateString());
// console.log(todate.toString());
// console.log(todate.toLocaleString());

// console.log(typeof todate);

// let myCreateDate = new Date(2023, 7, 15)
// let myCreateDate = new Date(2023, 7, 15, 5, 3)
let myCreateDate = new Date("2023-01-15");

// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log(Date.now()); // milisecond
console.log(Math.floor(Date.now() / 1000)); // second

let newDate = new Date();

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});
```

## 12. Arrays IN JS

- What → array mat lab jab bhi aapko ek ya ek se jaada value ek saath rakhni ho

```jsx
let users = ["Sandy", "Amit", "Aman", "Vicky", "Piyush"];

console.log(users[0]);
console.log(users[4]);
console.log(users[5]);
```

- How →

```jsx
let arr = [1, 3, "5", function () {}, [], 8];

console.log(arr[0]);
console.log(arr[3]);
```

- Why → a lot of times the data is in the shape of more than member, to contain all data altogether, we can save it in an array

```jsx
// Arrays IN JS

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
```

```jsx
// *********** Another Methods in Arrays *******************

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // sprade operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("sandy"));
console.log(Array.from("sandy"));
console.log(Array.from({ name: "sandy" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
```

## 13. Objects IN JS

- What → Object ek tareeka hai jisse ki hum ek identity ki details ko ek saath rakh skte hai
- kai logo ka data = array[ ]
- ek bande ka kai saara data = object{ }

```jsx
let obj = {};

let obj1 = new Object();
```

```jsx
let battery = {
  company: "Amazon",
  price: 12000,
  for: " camera ",
  isWorking: true,
};

battery.company;
```

```jsx
// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sandeep",
  "full name": "Sandeep Patel",
  [mySym]: "mykey1",
  age: 18,
  location: "Bareilly",
  email: "sandeep@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "sandeep@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "sandeep@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
```

```jsx
// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sandy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sandeep",
      lastname: "Patel",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ************* Object distructuring ***************
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "sandeep",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);

const { courseInstructor } = course;
console.log(courseInstructor);

//   JSON Formate
// {
//     "name": "sandeep",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
```

## 14. Conditionals

- conditionals = if, else, else-if, ternary operator, switch case
- 99% if else else-if
- 1% - ternary operator
- jab bhi aapko program mein decision lena ho, ki aage ka execution kaisa ho to waha par if else else-if use hota hai
- truthy and falsy values
- har value ko true ya false banaya jaa skta hai, ye depend krta hai, ki wo value ka type kya hai, agar wo value, truthy hai to true banegi and falsy hai to false
- falsy values → null, undefined, NaN, 0, document.all, false, “ ”, ‘ ’
- truthy value → baaki sab truthy

1. Else-If

```jsx
// if
if (false) {
  // code not execute
}

if (true) {
  // code execute
}

// [=] - operator assignment (const isLoggedin = true)
// [==] - check equal or not (2 == 2)
// [===] - check variableName typeof(interger[let, const], string )
```

```jsx
const isUserloggedIn = true;
const temperature = 41;

if (temperature === 41) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

//   same work
if (temperature < 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==
```

```jsx
const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // power scope Problems
```

```jsx
// -> shortHand notation (but unreadable code)

const balance = 1000;
if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}
```

```jsx
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 === "2") {
  console.log("Allow to buy products");
} else {
  console.log("Not allow to buy products");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
```

2. Switch Case

```jsx
// switch case

switch (
  key // syntax
) {
  case value:
    break;

  default:
    break;
}
```

```jsx
const month = 5;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("aplr");
    break;

  default:
    console.log("default case");
    break;
}
```

```jsx
const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
```

3. Truthy && Falsy Values

```jsx
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
```

```jsx
//truthy values
// "0", 'false', " ", [], {}, function(){}
```

```jsx
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

if (userEmail.length === 0) {
  console.log("Array is empty");
}
```

```jsx
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
```

4. Nullish Coalescing Operator (??): null undefined

```jsx
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = null ?? undefined ?? 10 ?? 20
// val1 =  undefined ?? null ?? 10 ?? 20
// val1 =  undefined ?? null
val1 = null ?? undefined;

// console.log(val1);
```

## 15. Loops

- loops = repeat
- for( 70% times used ), while, do-while, foreach( 25% times used ), forin, forof

```jsx
for(start, end, change) {

}
```

```jsx
start;
while (end) {
  change;
}
```

1. for Loop

```jsx
// for

for (let index = 0; index <= 10; index++) {
  const element = index;
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );   // table print
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  // for (let index = 0; index <= myArray.length; index++) {   //undefiend
  const element = myArray[index];
  // console.log(element);
}
```

2. Break and Continue

```jsx
// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
```

3. while loop

```jsx
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}
```

```jsx
let myArray1 = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray1.length) {
  console.log(`Value is ${myArray1[arr]}`);
  arr = arr + 1;
}
```

4. do-while Loop

```jsx
// let score = 10;
let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
```

## High Order Array Loops

- foreach ek normal loop nahi hai for and while ki tarah jo numbers pe ya start end par chalta hai,
- foreach loop sirf array pe chalta hai

## 1. For of loop

- the **`for...of`** loop is a feature introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015.
- It provides a concise and easy way to iterate over iterable objects such as arrays, strings, maps, sets, etc.
- Here's the basic syntax of the **`for...of`** loop:

```jsx
for (variable of iterable) {
  // code block to be executed
}
```

- **`variable`**: This is a variable that will represent each individual element or value in the iterable object during each iteration of the loop. You declare this variable before the **`of`** keyword.
- **`of`**: This is a keyword that separates the **`variable`** from the **`iterable`**. It's used to indicate that you want to iterate over the elements of the iterable.
- **`iterable`**: This is the object over which you want to iterate. It can be an array, a string, a map, a set, or any other object that implements the iterable protocol.

- using a **`for...of`** loop to iterate over the elements of an array:

```jsx
const numbers = [1, 2, 3, 4, 5]; // array ke liye forOf loop

for (const num of arr) {
  //console.log(num);
}
```

In this example, during each iteration of the loop, the variable **`num`** will take on the value of each element in the **`numbers`** array, one at a time. The loop will log each number to the console.

One important thing to note about the **`for...of`** loop is that it iterates over the _values_ of the iterable object, not its indices. This means you don't have direct access to the indices inside the loop. If you need access to indices, you would typically use a traditional **`for`** loop or the **`forEach()`** method for arrays.

- iterating over the characters of a string:

```jsx
const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}
```

This loop will log each character of the string **`'Hello word!'`** to the console, one character at a time.

### Map

In JavaScript, the **`for...of`** loop is commonly used to iterate over arrays. However, it can also be used to iterate over other iterable objects, such as maps. Here's how you can use the **`for...of`** loop with a Map in JavaScript:

```
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
```

- We first create a Map named **`map`**.
- We then add some key-value pairs to the map using the **`set()`** method.
- Finally, we use a **`for...of`** loop to iterate over the Map. Inside the loop, we destructure each entry of the Map into **`key`** and **`value`** variables, which represent the key and value of each entry, respectively. We then log these key-value pairs to the console.

This demonstrates how the **`for...of`** loop can be used with a Map to iterate over its entries and access both the keys and values conveniently.

### In Object

```jsx
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  // myObject is not iterable
  console.log(key, ":-", value);
}
```

The code you provided attempts to use a **`for...of`** loop to iterate over the key-value pairs of an object (**`myObject`**). However, the error message "myObject is not iterable" indicates that you can't directly iterate over an object using a **`for...of`** loop because objects in JavaScript are not inherently iterable.

In JavaScript, the **`for...of`** loop is primarily used to iterate over iterable objects, such as arrays, strings, maps, sets, etc. Objects, on the other hand, do not implement the iterable protocol by default.

If you want to iterate over the properties of an object, you typically use a **`for...in`** loop or **`Object.entries()`** method instead.

### the **`for...of`** loop provides a convenient way to iterate over the values of iterable objects in JavaScript, making code more readable and concise when you don't need to work with indices.

## 2. for in loop

- In JavaScript, the **`for...in`** loop is used to iterate over the enumerable properties of an object.
- Here's the basic syntax:

```jsx
for (variable in object) {
  // code to be executed
}
```

- **`variable`**: A variable that will be assigned to each property in the object on each iteration.
- **`object`**: The object whose enumerable properties are iterated.

- using a **`for...in`** loop to iterate over the elements of an object:

```jsx
//    forIn loop in Object
const myObject = {
  // object ke liye forIn loop
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(key);
  // console.log(myObject[key]);
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}
```

This code demonstrates the usage of a **`for...in`** loop in JavaScript to iterate over the properties of an object **`myObject`**. Let's break down the code:

1. First, an object named **`myObject`** is defined, which contains key-value pairs where keys represent programming language abbreviations and values represent their corresponding full names.
2. The **`for...in`** loop is used to iterate over the properties of the **`myObject`** object.
3. Inside the loop:

   - The **`const key`** variable is declared to represent each property/key of the **`myObject`** object in each iteration.
   - Various actions are commented out:

     - **`console.log(key);`**: This logs the current key (e.g., 'js', 'cpp', etc.) to the console.
     - **`console.log(myObject[key]);`**: This logs the value corresponding to the current key to the console (e.g., 'javascript', 'C++', etc.).
     - **`console.log(`**${key} shortcut is for ${myObject[key]}**`);`**: This logs a formatted string indicating the key and its corresponding value to the console (e.g., 'js shortcut is for javascript', 'cpp shortcut is for C++', etc.).

     ### In Array

     ```jsx
     // forIn loop in Array
     const programming = ["js", "rb", "py", "java", "cpp"];

     for (const key in programming) {
       console.log(key);
       // console.log(programming[key]);
     }
     ```

     This code attempts to use a **`for...in`** loop to iterate over the elements of an array named **`programming`**. However, using **`for...in`** loop with arrays in JavaScript is generally not recommended because it iterates over all enumerable properties of an object, including array indices, as well as properties inherited from the prototype chain. This can lead to unexpected behavior.
     Let's break down the code:

     1. An array named **`programming`** is defined, containing several programming language abbreviations.
     2. The **`for...in`** loop is used to iterate over the indices (or keys) of the array.
        Inside the loop:

     - The **`const key`** variable is declared to represent each index of the array in each iteration.
     - **`console.log(key);`** prints the current index to the console.
       However, using **`for...in`** loop with arrays in JavaScript may not produce the expected behavior, as it iterates over all enumerable properties, not just array elements. In this case, it will iterate over the indices of the array, but it's not guaranteed to iterate in numerical order, and it may also include properties inherited from the array's prototype.
       To iterate over the elements of an array in JavaScript, it's recommended to use a regular **`for`** loop, **`forEach()`** method, or other array iteration methods like **`map()`**, **`filter()`**, etc. Here's how you could iterate over the elements of the **`programming`** array using a regular **`for`** loop:

     ```jsx
     for (let i = 0; i < programming.length; i++) {
       console.log(programming[i]);
     }
     ```

     ### In map

     ```jsx
     const map = new Map(); // not iterateble
     map.set("IN", "India");
     map.set("USA", "United States of America");
     map.set("Fr", "France");
     map.set("IN", "India");

     for (const key in map) {
       console.log(key);
     }
     ```

     This code attempts to iterate over the properties of a Map object using a **`for...in`** loop. Let's break down the code:

     1. A Map object named **`map`** is created using the **`new Map()`** constructor. Map objects in JavaScript are collections of key-value pairs where both the keys and the values can be of any type.
     2. Several key-value pairs are added to the Map using the **`set()`** method. It's worth noting that when setting a key that already exists in the Map, the previous value associated with that key will be replaced by the new one. In this case, the key **`'IN'`** is set twice with the value **`'India'`**, but only the last one will be stored.
     3. The **`for...in`** loop is used to iterate over the properties of the **`map`** object.
        Inside the loop:

     - The **`const key`** variable is declared to represent each property/key of the **`map`** object in each iteration.
     - **`console.log(key);`** prints the current property/key to the console.
       However, using **`for...in`** loop with Map objects in JavaScript is not recommended. The reason is that Map objects are not regular JavaScript objects, and their properties are not enumerable. The **`for...in`** loop in JavaScript is designed to iterate over the enumerable properties of an object, but Map objects do not have enumerable properties in the same sense as regular objects.
       If you want to iterate over the key-value pairs of a Map object, you can use methods provided by the Map object itself, such as **`forEach()`**:

     ```jsx
     map.forEach((value, key) => {
       console.log(key + ": " + value);
     });
     ```

     ### Here's an example of how you can use it:

     ```jsx
     const person = {
       firstName: "John",
       lastName: "Doe",
       age: 30,
     };

     for (let key in person) {
       console.log(key + ": " + person[key]);
     }
     ```

     This will output:

     ```jsx
     firstName: John;
     lastName: Doe;
     age: 30;
     ```

     However, it's important to note that **`for...in`** loop iterates over all enumerable properties, including those inherited from the object's prototype chain. If you only want to iterate over an object's own properties, you should use **`hasOwnProperty()`** method to check if the property belongs to the object itself:

     ```jsx
     for (let key in person) {
       if (person.hasOwnProperty(key)) {
         console.log(key + ": " + person[key]);
       }
     }
     ```

     This will only output the object's own properties:

     ```jsx
     firstName: John;
     lastName: Doe;
     age: 30;
     ```

     ## 3. forEach loop

     - In JavaScript, the **`forEach()`** method is used to iterate over elements in an array. It executes a provided function once for each array element.
     - The syntax looks like this:

     ```jsx
     array.forEach(function (currentValue, index, array) {
       // Do something with currentValue
     });
     ```

     - **`currentValue`**: The current element being processed in the array.
     - **`index`** (optional): The index of the current element being processed in the array.
     - **`array`** (optional): The array **`forEach()`** was called upon.
       Here's a simple example of how you can use **`forEach()`**:
     - Using Array

     ```jsx
     const coding = ["js", "ruby", "java", "python", "cpp"];

     coding.forEach(function (val) {
       //is callback function -> callback function ka name nahi hota
       console.log(val);
     });
     ```

     1. **`const coding = ["js", "ruby", "java", "python", "cpp"]`**: This line declares a constant variable **`coding`** and assigns it an array containing strings representing programming languages.
     2. **`coding.forEach(function(val) { ... });`**: This line invokes the **`forEach()`** method on the **`coding`** array. The **`forEach()`** method takes a function as an argument, which will be called for each element in the array.
     3. **`function(val) { console.log(val); }`**: This is the function being passed as an argument to **`forEach()`**. It is an anonymous function (meaning it has no name), and it takes one parameter, **`val`**, which represents the current element being iterated over in the array. Inside this function, **`console.log(val)`** prints each element of the array to the console.
        So, when this code runs, it will print each programming language in the **`coding`** array to the console, one by one. The output will be:

     ```jsx
     js;
     ruby;
     java;
     python;
     cpp;
     ```

     ```jsx
     const coding = ["js", "ruby", "java", "python", "cpp"];

     coding.forEach((item) => {
       console.log(item);
     });
     ```

     1. **`const coding = ["js", "ruby", "java", "python", "cpp"];`**: This line initializes a constant variable **`coding`** and assigns it an array containing strings representing programming languages.
     2. **`coding.forEach((item) => { console.log(item); });`**: The **`forEach()`** method is called on the **`coding`** array. It takes a callback function as an argument. In this case, an arrow function is used as the callback. The arrow function takes one parameter, **`item`**, which represents the current element being iterated over in the array. Inside the arrow function, **`console.log(item)`** is called, which prints each element of the array to the console.
        - **`(item) => { console.log(item); }`**: This is the arrow function used as the callback for **`forEach()`**. It takes one parameter, **`item`**, and logs it to the console using **`console.log()`**.

     ```docker
     const coding = ["js", "ruby", "java", "python", "cpp"];

     function printMe(item) {
       console.log(item);
     }
     coding.forEach(printMe); // printme function pass as a referance
     ```

     1. **`const coding = ["js", "ruby", "java", "python", "cpp"];`**: This line initializes a constant variable **`coding`** and assigns it an array containing strings representing programming languages.
     2. **`function printMe(item) { console.log(item); }`**: This is a named function **`printMe`** that takes one parameter **`item`** and logs it to the console.
     3. **`coding.forEach(printMe);`**: The **`forEach()`** method is called on the **`coding`** array. It takes a callback function as an argument. In this case, the **`printMe`** function is passed as a reference to **`forEach()`**. This means that for each element in the **`coding`** array, the **`printMe`** function will be called with the current element as an argument
        the **`forEach()`** method iterates over each element in the **`coding`** array, and for each element, it calls the **`printMe`** function, passing the current element as an argument. The **`printMe`** function then logs each element to the console.
        When executed, this code will output:

     ```jsx
     js;
     ruby;
     java;
     python;
     cpp;
     ```

     - Using Object in Array

     ```jsx
     const myCoding = [
       {
         languageName: "javascript",
         languageFileName: "js",
       },
       {
         languageName: "java",
         languageFileName: "java",
       },
       {
         languageName: "python",
         languageFileName: "py",
       },
     ];

     myCoding.forEach((item) => {
       // console.log(item);
       // console.log(item.languageName);
       console.log(item.languageFileName);
     });
     ```

     1. **`const myCoding = [...]`**: This line initializes a constant variable **`myCoding`** and assigns it an array containing objects. Each object represents a programming language and has two properties: **`languageName`** and **`languageFileName`**.
     2. **`myCoding.forEach((item) => { ... });`**: The **`forEach()`** method is called on the **`myCoding`** array. It takes a callback function as an argument. In this case, an arrow function is used as the callback. The arrow function takes one parameter, **`item`**, which represents the current element being iterated over in the array.
     3. **`console.log(item.languageFileName);`**: Inside the arrow function, **`console.log(item.languageFileName)`** is called. This accesses the **`languageFileName`** property of each object (**`item`**) in the **`myCoding`** array and logs it to the console

     ```jsx
     const coding = ["js", "ruby", "java", "python", "cpp"];

     // const values = coding.forEach( (item) => {
     //     console.log(item);
     // } )
     // console.log("Valeu:", values);

     const values = coding.forEach((item) => {
       console.log(item);
       return item;
     }); // forEach no return value

     console.log(values);
     ```

   1. **`const coding = ["js", "ruby", "java", "python", "cpp"];`**: This line initializes a constant variable **`coding`** and assigns it an array containing strings representing programming languages.
   2. **`const values = coding.forEach((item) => { ... });`**: The **`forEach()`** method is called on the **`coding`** array. It takes a callback function as an argument. In this case, an arrow function is used as the callback. The arrow function takes one parameter, **`item`**, which represents the current element being iterated over in the array.
   3. **`console.log(item);`**: Inside the arrow function, **`console.log(item)`** is called, which prints each element of the array to the console.
   4. **`return item;`**: This line attempts to return the current element **`item`** within the callback function. However, it's important to note that the **`forEach()`** method doesn't return any value. Even if you try to return something from within the callback function, it won't affect the **`forEach()`** method itself.
   5. **`const values = ...`**: This line declares a constant variable **`values`** and attempts to assign the return value of the **`forEach()`** method to it. However, since **`forEach()`** doesn't return anything, the value of **`values`** will be **`undefined`**.
   6. **`console.log(values);`**: Finally, **`console.log(values)`** prints the value of **`values`** to the console, which is **`undefined`**.

   So, when this code is executed, it will print each programming language in the **`coding`** array to the console and then print **`undefined`** because the **`forEach()`** method doesn't return any value. The output will be:

   ```jsx
   js;
   ruby;
   java;
   python;
   cpp;
   undefined;
   ```

## 16. Functions

- Types of JS → es5 and es6
- es5 [ function types ] - function statements, function expressions, anonymous function
- es6 [ function types ] - fat arrow function

         a)  basic fat arrow
         b)  fat arrow with one param
         c) fat arrow with implicit return

- functions - JS mein function normal programming language jaise nahi hai, iska mat lab hai, yaha par JS mein, functions banaane ke liye type nahi batana padta, Bas apko function word(keyword) likhna padega
- indepth - JS mein functions first class functions ka darja diya gaya hai, jiska matlab hai, ki JS mein functions ko value/ variable ki tarah treat kiya jaa kta hai
- what is function → koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal skte hai

```jsx
function abcd() {
  console.log("bartan uthaao");
  console.log("chaawal daalo");
  console.log("paani daalo");
  console.log("gas par chadhao for 20 mins");
  console.log("gas off krke thanda hone do");
  console.log(" khaalo");
}

abcd();
```

```jsx
var dateofbirth = 7;
var todaysdate = 12;

function happybirthday() {
  console.log("happy birthday");
}

if (dateofbirth === todaysdate) {
  happybirthday();
}
```

- why we need → to reuse code and to wrap the code which we want to run in future at some point of time
- how to use → function abcd(){ your code }
- Extras we should know → parameters and arguments

```jsx
 function abcd(parameters(val) ) {
     console.log(12 + val); ;
}
abcd(arguments(12));
```

```jsx
// prep for interview

function abcd(){
    // function statement
};

var abcd = function(){
    // function expression
  };


 function(){
    // anonymous function
};
```

```jsx
// Basic fat arrow
var a = () => {};

var b = () => {};
```

```jsx
// fat arrow with one param

var g = (ab) => {};
// OR
var g = (ab) => {};

g(12);
```

```jsx
// fat arrow with implicit return

var abcd = () => "Sandeep";
var abcd = () => 23;
var abcd = () => true;
var abcd = () => 35.6;

var ans = abcd();
```

```jsx
function myName() {
  console.log("sandeep");
  console.log("patel");
}
// myName();

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}
// addTwoNumber(2, 2);

// const sum = addTwoNumber(5, 5)
// console.log("Sum: ", sum);

// addTwoNumber(2, "2")
// addTwoNumber("2", 2)
// addTwoNumber(null, 2)
// addTwoNumber(2, null)
// addTwoNumber("2", null)
// addTwoNumber(null, "2")

function addTwoNumber(num1, num2) {
  // let sum = num1 + num2;
  // return sum;
  // console.log("sandy");

  return num1 + num2;
}

const result = addTwoNumber(5, 5);
// console.log("result: ", result);

function userLogginMsg(username) {
  // if(username === undefined){
  //     console.log("Please enter a username");
  //     return
  // }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(userLogginMsg("sandy"));
// console.log(userLogginMsg(""));
// console.log(userLogginMsg());

function userLogginMsg(username = "sandeep") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(userLogginMsg());
```

```jsx
function calculateCartprice1(num) {
  return num;
}
console.log(calculateCartprice1(299, 399, 699, 999));

// //    using (...)-> rest operator
function calculateCartprice(...num) {
  return num;
}
console.log(calculateCartprice(299, 399, 699, 999));
```

```jsx
function calculateCartprice(value1, value2, ...num) {
  return num;
}
console.log(calculateCartprice(299, 399, 699, 999));
```

```jsx
// ************* Objects Pass in functions **********************

const user = {
  username: "sandy",
  prices: 299,
};

function objectHandler(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price} `
  );
}
objectHandler(user);

objectHandler({
  username: "sandeep",
  price: 699,
});
```

```jsx
// ************** Array pass in function ******************
let array = [299, 599, 799, 899, 999];

function returnArrayValue(getarr) {
  return getarr[0];
}
console.log(returnArrayValue(array));
console.log(returnArrayValue([5, 2, 4, 9]));
```

## 17. Scope IN JS

```jsx
var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);
```

```jsx
function one() {
  const username = "sandeep";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website);

  two();
}
one();
```

```jsx
if (true) {
  const username = "sandeep";
  if (username === "sandeep") {
    const website = " youtube";
    console.log(username + website);
  }
  console.log(website);
}

console.log(username);
```

```jsx
// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));
function addone(num) {
  // only fxn declaretion
  return num + 1;
}
console.log(addone(5));

// Hoisting

// console.log(addTwo(9));   // show error
const addTwo = function (num) {
  //fxn declaration + variable hold(addTwo)
  return num + 2;
};
addTwo(5);
console.log(addTwo(9));
```

## 18. Arrow Function IN JS

```jsx
const user = {
  username: "sandeep",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sandy";
user.welcomeMessage();

console.log(this);
```

```jsx
function chai1() {
  console.log(this);
}
// chai1()

function chai2() {
  let username = "sandeep";
  console.log(this.username);
}
// chai2()

const chai3 = function () {
  let username = "hitesh";
  console.log(this.username);
};
// chai3()

const chai4 = () => {
  let username = "hitesh";
  console.log(this.username);
  console.log(this);
};
// chai4()
```

```jsx
const addTwo = (num1, num2) => {
  // explicite return
  return num1 + num2;
};
// console.log(addTwo(2, 3));

const addTwo1 = (num1, num2) => num1 + num2; // implicite return
// console.log(addTwo1(1, 1));

const addTwo2 = (num1, num2) => num1 + num2;
// console.log(addTwo2(9, 9));

const addTwo3 = (num1, num2) => ({ username: "sandeep" });
console.log(addTwo3(3, 4));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => {})
```

## 19. RETURN

- return ka mat lab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return functions ke andar lagta hai

```jsx
function retFcn() {
  return 15;
}

var ans = retFcn();
console.log(ans);
```

- aisa function jo kuchh return nahi karta wo bhi undefined return krta hail

## 20. Undefined, Not define & Null

- Undefined is a value → ye value tab di jaati hai jab variable ko koi value naa mili ho, iska

      matlab hai, ye ek garbage value ki tarah treat ki jaati hai, aap isey default value bhi
       kah skte ho

```jsx
let a;
```

- not defined is an error → koi particular element/ identity ko use karna without it's declaration gives an error, and that error is not defined error

```jsx
console.log(a);
```

- null is also a value →
  - this is a value which resolve like, not found
  - null is recieved when something is not found

## 21. Loop with ARRAY

- Q. Add all members of array
- Q. Count all members
- how to loop an array

```jsx
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (val) {
  // console.log("Hello")
  console.log(val);
});
```

- How to loop an array and do something with each element

```jsx
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (val) {
  console.log(val + 1);
});
```

## 22. Synchronous & Asynchronous JavaScript

- Synchronous code mein code humesha line by line chalta hai
- Async code line by line nahi chalta, saara async code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dedliya jaata hai.

## 23. This Keyword

- this keyword js mein one of the most suspenseful keyword
- keyword ka matlab hota hai aisa word jiska koi matlab ho programming
  lang mein
- this ki value baar baar badal sakti hai alag alag conditions mein, saari
  conditions ko seekh jaao to this ko samajh jaaoge

1. global → window

```jsx
console.log(this);
```

2. function → window

```jsx
function sand() {
  console.log(this);
}

sand();
```

3. method → object

```jsx
var obj = {
  name: function () {
    // console.log(this);
    console.log(this.age);
  },
  age: 25,
  email: "sand@gmail.com",
};

obj.name();
```

4. function inside method (ES5) → window

```jsx
var obj2 = {
  sayName: function () {
    console.log(this.age);
    function childfnc() {
      console.log(this);
      //    console.log(this.age);
    }

    childfnc();
  },

  age: 25,
};

obj2.sayName();
```

5. function inside method (ES6) →object

```jsx
var obj2 = {
  sayName: function () {
    console.log(this.age);
    const child = () => {
      console.log(this);
    };

    child();
  },

  age: 25,
};

obj2.sayName();
```

```jsx
// window
var obj3 = {
  sayName: () => {
    console.log(this);
  },
};

obj3.sayName();
```

6. constructor function mein this ki value → new blank object

```jsx
function add() {
  console.log(this);
}

const ans = new add();
```

7. event listener mein this ki value → that element jispar event listener laga ho

```jsx
document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});
```

## 24. call apply & bind

- ye teen tareeke hai function ko call karne ke kisi object ko this maan kar

1. call

```jsx
const obj = { name: "Sandy" };

function abcd() {
  console.log(this);
}

abcd(); // this value -> window

abcd.call(12); // this value -> number
abcd.call("12"); // this value -> String
abcd.call(obj); // this value -> Onject
```

2. apply

```jsx
const obj = { name: "Sandy" };

function abcd(a, b, c) {
  console.log(this);
}

abcd.apply(obj, [2, 4, 6]);
```

3. bind → bind function ko chalata nhi he ek aur function deta he retuen karke jisko ham baad me chala skte he

```jsx
const obj = { name: "Sandy" };

function abcd(a, b, c) {
  console.log(this);
}

const bindFxn = abcd.bind(obj);

bindFxn();
```

## 25. Prototypal inheritance

- hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein.

```jsx
function makeHuman() {
  this.name = "Sandy";
  this.age = 22;
}

//  OR

function makeHuman(name, age) {
  this.name = name;
  this.age = age;
}

let human = makeHuman1("Sandy", 22);
let human1 = makeHuman1("Sam", 21);
```

- ek function jo ki this ka upyog kar raha ho and new ke dwaara
  naye naye obejcts bana kar deta ho aise function ko constructor
  function kahte hai
- aisa koi bhi function jismein aap this ka upyog kar rhe ho aur
  us function ko call karte waqt aap new ka upypog karein, to new ka
  matlab waha par ek blank object hojaata hai

```jsx
function makeHuman1(name, age) {
  this.name = name;
  this.age = age;
  this.printName = function () {
    console.log(this.name);
  };
}

let human = makeHuman1("Sandy", 22);
let human1 = makeHuman1("Sam", 21);

console.log(human.printName);
console.log(human1.printName);
```

```jsx
function makeHuman(name, age) {
  this.name = name;
  this.age = age;
}

makeHuman.prototype.course = "BTech";
makeHuman.prototype.department = "CS&IT";

let human = makeHuman1("Sandy", 22);
let human1 = makeHuman1("Sam", 21);
```

## 26. Closures

- aisa koi bhi function jo ek aur function ko return karde, aur use kare parent function ka koi variable usey closure kahte hai

```jsx
function counter() {
  var count = 1;

  return function () {
    count++;
    console.log(count);
  };
}

let fxn = counter();

console.log(fxn());
```

```jsx
function timer() {
  var a = 10;
  return setTimeout(function () {
    console.log(a);
  }, 5000);
}

let time = timer();
console.log(time());
```

## 27. Event delegation

- event delegation jab aap event listener se kai saare different elements ke events 1<0 handle kar sake
- event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different task karaol

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/ec77d37d-6aca-4228-aad9-7a702a0d85d8/Untitled.png)

```jsx
var parent = document.querySelector("#parent");

parent.addEventListener("click", function (details) {
  // console.log(details);
  // console.log(details.target);

  if (details.target.id === "play") {
    console.log("play song");
  } else if (details.target.id === "pause") {
    console.log("pause song");
  }
});
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/5727bcfc-8269-4392-8401-5f8188165163/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/3fdc12c2-324e-448d-842e-f417b4783a54/Untitled.png)

## 28. High Order Function

- aisa koi fnc jo ki ek fnc ko parameter mein accept karle and/or ek function ko return karde

```jsx
function highFxn(para) {}

highFxn(function () {});
```

```jsx
function highFxn1() {
  return function () {};
}
```

```jsx
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach(function () {});
```

## 29. try - catch

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/d6a9b417-2cf9-4197-b734-e1b9a55c8487/Untitled.png)

## 30. Custom Event

- events, click, dblclick, mouseover, input
- How

  1. make event
  2. attach event to some dom element
  3. dispatch that event from that dom element in which you attached the event

```jsx
**const evt = new Event("customEvt");

document.querySelector("button")
    .addEventListener("customEvt", function () {
        alert("custom event ");
    })

document.querySelector("button").dispatchEvent(evt);**
```

# 31. JavaScript DOM

- DOM = DOCUMENT OBJECT MODEL
- JO BHI HUM WEBSITE PAR DEKHTE HAI WO SAB KUCHH BODY TAG KE ANDAR BANTA HAI , AB JO BODY MEIN BANTA HAI WAHI HUME-IN WEBSITE PAR DIKHTA HAI, DOM ACTUALLY HOTA HAI THODA ÅASAAN SHABDO MEIN HTML TAG AUR USKA POORA CONTROL JS MEIN
- KABHI AAP CHAAHTE HO Kl AAP EK BUTTON KO CLICK KRKE EK DIV GAAYAB KARDE
- html mein koi aisa feature nahi hai jo click ko handle kar sake
- Aisi js jo aapke webpage par chhejo ko badal sake, us js ko hum perform kar skte hai DOM ke saath
- Aisa js ka koi bhi code jo webpage mein kuchh bhi change karega wo js
  ka DOM ka code kahlaayega

### Dom manipulation => body mein kuchh bhi change karna ya manipulate karna actually dom manipulation kahlaata hai.

```jsx
// ******** Promise Creation ********
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// ********** OR ********

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "code@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "sandy", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
```
