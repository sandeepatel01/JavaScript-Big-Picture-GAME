console.log("Restart With JavaScript");

//******************** Comparision In JavaScript *************************

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(3 >= 3);
// console.log(5 <= 4);
// console.log(1 == 1);

// console.log("2" == 2);
// console.log("2" === 2);
// console.log("03" > 2);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null == 0);
// console.log(null === 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined === 0);



// ***************** Datatype Summary *************************

//  Primitive - call by value
//  7 types :
//   String,
//   Number,
//    Boolean,
//    null,
//    undefined,
//    Symbol,
//    BigInt 


const score = 55;
const scoreValue = 22.5;

const isLongIn = true;
const outSideTemperature = null;
let userName;

const id = Symbol('333');
const anotherId = Symbol('333');

// console.log(id == anotherId);
// console.log(id === anotherId);

const bigNumber = 3456543576654356754n;



// Reference (Non primitive) - call by referance

// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"];

const userDetials = {
    name: "Sandy",
    age: 22,
    course: "B.tech"
}

const myFunction = function () {
    // console.log("Restart with JavaScript");
}

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLongIn);
// console.log(typeof outSideTemperature);
// console.log(typeof userName);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);

// console.log(typeof heros);
// console.log(typeof userDetials);
// console.log(typeof myFunction);




// ********************************* String In JavaScript *************************

const name = "Sandeep";
const repoCount = 25;

// console.log(name + repoCount);
// console.log(`My name is ${name} and my repo count is ${repoCount}`);


// String Methods 
const discordName = new String('Sandeep-pt');

// console.log(discordName[0]);
// console.log(discordName[6])
// console.log(discordName.__proto__);


console.log(discordName.length);
console.log(discordName.toUpperCase());
console.log(discordName.toLowerCase());

console.log(discordName.charAt(1));
console.log(discordName.charAt(0))
console.log(discordName.charAt(6));

console.log(discordName.indexOf('S'));
console.log(discordName.indexOf('p'));
console.log(discordName.indexOf('d'));




// const newString = discordName.substring(0, 4);
// const newString = discordName.substring(1, 4);
// const newString = discordName.substring(3, 6);
// const newString = discordName.substring(-3, 7);
const newString = discordName.substring(3, 7);
console.log(newString);


// const anotherString = discordName.slice(-7, 3);
// const anotherString = discordName.slice(-7, 7);
const anotherString = discordName.slice(2, 7);
console.log(anotherString)


const newStringOne = "   Sandy       ";
console.log(newStringOne);
console.log(newStringOne.trim());



//    replace & include[t/f] method 
const url = "https://sandeep.com/sandeep%20patel"
console.log(url.replace('%20', '_'));
console.log(url.includes('Sandy'))

let sentence = 'This is a sample sentence.';
let includesSample = sentence.includes('sample'); // Returns true

console.log(includesSample);


// console.log(discordName.split('-'));
console.log(discordName.split(' '));
// console.log(discordName.split(' ', '-'));


//  blink Method
// const contentString = "Hello, world";
// document.body.innerHTML = contentString.blink();
// console.log(contentString);



// lastIndexof method 
let sample = 'This is a sample sentence.';
let indexOfIs = sentence.indexOf('is'); // Returns the index of the first occurrence of 'is'
let lastIndexOfIs = sentence.lastIndexOf('is'); // Returns the index of the last occurrence of 'is'

console.log(indexOfIs); // 2
console.log(lastIndexOfIs); // 5

// console.log(discordName.lastIndexOf('S'))
// console.log(discordName.lastIndexOf('p'))
console.log(discordName.lastIndexOf('d'))



// concat() method 
let str1 = "Sandeep";
let str2 = " Patel";

let greeting = str1.concat(str2);
console.log(greeting);



// charAt() and charCodeAt() Methods 
let str = 'Hello, World!';
let charAtIndex2 = str.charAt(2); // Returns the character at index 2 ('l')
let charCodeAtIndex2 = str.charCodeAt(2); // Returns the Unicode value of the character at index 2 (108)

console.log(charAtIndex2);
console.log(charCodeAtIndex2);

console.log(discordName.charCodeAt(1));



// substring() method 
let longString = 'This is a long string.';
let substring = longString.substring(5, 10);

console.log(substring); // 'is a '


// substr() Method 
let longString1 = 'This is a long string.';
let subStr = longString1.substr(5, 7);

console.log(subStr); // 'is a lo'




// startsWith() and endsWith() Methods 
let message = 'Hello, JavaScript!';
let startsWithHello = message.startsWith('Hello'); // Returns true
let endsWithScript = message.endsWith('Script'); // Returns true

console.log(startsWithHello);
console.log(endsWithScript);
console.log(message.endsWith("JavaScript"));
console.log(message.startsWith("Hello"));
console.log(message.startsWith("Sandy"));



// repeat() Methods 
let repeatedString = 'Sandy'.repeat(3);
console.log(repeatedString); // 'abcabcabc'



// trimStart() and trimEnd() (introduced in ECMAScript 2019)

let paddedString = '   Trim me!   ';
let trimmedStartString = paddedString.trimStart();
let trimmedEndString = paddedString.trimEnd();

console.log(trimmedStartString); // 'Trim me!   '
console.log(trimmedEndString); // '   Trim me!'



// padStart() and padEnd()(introduced in ECMAScript 2017)

let paddedString1 = '5';
let paddedStart = paddedString1.padStart(3, '0'); // '005'
let paddedEnd = paddedString1.padEnd(3, '0'); // '500'

console.log(paddedStart);
console.log(paddedEnd);
