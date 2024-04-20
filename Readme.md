# JavaScript

## 1. JS the Language

           1.  JS = Language
           2. managed by EcmaScript →
                          naye features, puraane hatana, kharaab features sahi
                          arna and overall development of js.

- JS the language  =  coda likhna seekhna, main features
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