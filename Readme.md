# JavaScript

## 1. JS the Language

           1.  JS = Language
           2. managed by EcmaScript →
                          naye features, puraane hatana, kharaab features sahi
                          arna and overall development of js.

- JS the language  =  code likhna seekhna, main features
- JS the dom  =  code likhkar cheejein banana seekhna

## 2. Basics

- file connect karege and load karege script ko,
- basics of code execution,
- grammar and understanding of errors

## 3. Inbuilt features

- Browser Inbuild
1. console

```jsx
// console. log
console. log("Sandeep Patel")
// console. warn
console.warn("Sandeep Patel")
// console.error
console.erro ("Sandeep Patel")
```

1. alert

```jsx
alert ( " hely" ) ;
```

1. prompt

```jsx
// prompt alert ka bhai hai jo ki alert se ek kadam aage hai
prompt("hello");
```

## 4. Variables & constants

- har programming lang mein data se deal karna hota hai, wo alag alag prakaar ka data ho sakta  hai, ab aisa data jisse humein deal karna hai, wo save to krna padega na, to wo data save krne ke 1 iye hume koi saving space chahiye jaha par data save hojaayel and ye save krne ke liye unhe kuchh naam bhi dena padega and isiliye humein variables and constants banaane padte hai taaki data save hojaae and unka koi naam bhi ho taaki hum baad mein unhe access kar paaye
- variables and constants hote hai data store krne ke liye and variables mein data store hota hai and change bhi hojaata hai and constants mein data store and change nahi hota and dono hi browser par memory lete hai and browser RAM par chalta hai to technically dono RAM par chalte hai ya fir space lete hai

```jsx
var a = 12;
var b = 32;
const c = 67;
```

## 5. Compilers and interpreters

- JS language english words use krti hai and computers english nahi samjhte, wo samajhte hai 0 and 1 jisko current flow and current bypass bhi kah skte ho, and hum chaahte hai hum english mein likhke comp se baat krle, to hum ek translator lagaayege jo ki humara code english mein lega and use 0 and 1 mein convert kr dega,
- compiler and interpreter translators hai jo ki english code ko convert kr rhe hai machine code mein, JS mein interpreter hota hai
- java - compiler
- jit compiler[ dev by → google ]  - interpreter ki shuraati taakat use krta hai and compiler ki running taakat use krta hai

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
var a = function(){};

var arr = [1,2,3,4,5,6];
var b = arr;
b.pop();

// spread
var ar = [12, 13, 14,15];
var gh = [1,2,3];
var ba = [...gh]
ba.pop();

```

## 8. Conditionals

- conditionals = if, else, else-if, ternary operator, switch case
- 99% if else else-if
- 1% - ternary operator
- jab bhi aapko program mein decision lena ho, ki aage ka execution kaisa ho to waha par if else else-if use hota hai
- truthy and falsy values
- har value ko true ya false banaya jaa skta hai, ye depend krta hai, ki wo value ka type kya hai, agar wo value, truthy hai to true banegi and falsy hai to false
- falsy values → null, undefined, NaN, 0, document.all,  false, “ ”, ‘ ’
- truthy value → baaki sab truthy

## 9. Loops

- loops = repeat
- for( 70% times used ),  while,  do-while,  foreach( 25% times used ),  forin,  forof

```jsx
for(start, end, change) {

}
```

```jsx
start;
while(end){
change
}
```

- foreach ek normal loop nahi hai for and while ki tarah jo numbers pe ya start end par chalta hai,
- foreach loop sirf array pe chalta hai


## 10. Functions

- Types of JS  →  es5 and es6
- es5 [ function types ] - function statements, function expressions, anonymous function
- es6 [ function types ]  - fat arrow function

         a)  basic fat arrow
         b)  fat arrow with one param
         c) fat arrow with implicit return

- functions - JS mein function normal programming language jaise nahi hai, iska mat lab hai, yaha par JS mein, functions banaane ke liye type nahi batana padta, Bas apko function word(keyword) likhna padega
- indepth -  JS mein functions first class functions ka darja diya gaya hai, jiska matlab hai, ki JS mein  functions ko value/ variable ki tarah treat kiya jaa kta hai
- what is function →  koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi  chalana ho, usey function mein daal skte hai

```jsx
 function abcd() {

console. log("bartan uthaao");
console. log( "chaawal daalo");
console. log( "paani daalo");
console. log("gas par chadhao for 20 mins");
console.log("gas off krke thanda hone do");
console.log(" khaalo" ) ;

}

abcd();
```

```jsx
var dateofbirth = 7
var todaysdate = 12;

function happybirthday() {
console.log("happy birthday");
}

if (dateofbirth === todaysdate) {
 happybirthday()
 };
```

- why we need →  to reuse code and to wrap the code which we want to run in future at some point of time
- how to use → function abcd(){ your code }
- Extras we should know →  parameters and arguments

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

var b = () => {

}
```

```jsx
// fat arrow with one param

var g = (ab) => {}
  // OR
var g = ab => {}

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

## 11. RETURN

- return ka mat lab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return functions ke andar lagta hai

```jsx
function retFcn(){
    return 15;
};

var ans = retFcn();
console.log(ans);

```

- aisa function jo kuchh return nahi karta wo bhi undefined return krta hail

## 12. Undefined, Not define & Null

- Undefined is a value → ye value tab di jaati hai jab variable ko koi value  naa mili ho, iska

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
     *  this is a value which resolve like, not found
     *  null is recieved when something is not found

## 13. Arrays

- What →  array mat lab jab bhi aapko ek ya ek se jaada value ek saath rakhni ho

```jsx
let users = ["Sandy", "Amit", "Aman", "Vicky", "Piyush"];

console.log(users[0]);
console.log(users[4]);
console.log(users[5]);
```

- How →

```jsx
let arr = [1,3,"5", function(){}, [], 8];

console.log(arr[0]);
console.log(arr[3]);
```

- Why → a lot of times the data is in the shape of  more than member, to contain all data altogether, we can  save it in an array

## 14. Loop with ARRAY

- Q. Add all members of array
- Q. Count all members
- how to loop an array

```jsx
let arr = [1,2,3,4,5];

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

## 15. Objects

- What → Object ek tareeka hai jisse ki hum ek identity ki details ko ek saath rakh skte hai
- kai logo ka data = array[ ]
- ek  bande ka  kai saara data  = object{ }

```jsx
 let obj = {};

 let obj1 = new Object();
```

```jsx
let battery = {
    company: "Amazon" ,
    price: 12000,
    for: " camera ",
    isWorking: true
};

    battery.company
```

## 17. Synchronous & Asynchronous JavaScript

- Synchronous code mein code humesha line by line chalta hai
- Async code line by line nahi chalta, saara async code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dedliya jaata hai.