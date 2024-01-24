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


