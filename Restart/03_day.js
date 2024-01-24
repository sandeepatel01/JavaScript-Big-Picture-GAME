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

console.log(typeof heros);
console.log(typeof userDetials);
console.log(typeof myFunction);