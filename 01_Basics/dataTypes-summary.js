//  Primitive - call by value
        //  7 types : String,
                    //   Number,
                    //    Boolean,
                    //    null,
                    //    undefined,
                    //    Symbol,
                    //    BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) - call by referance

         // Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sandy",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);



// **************** memory in javascript *************
    //  1. Stack(Primitive)

let myName = "Sandeepatel";
let anotherName = myName;
anotherName = "chaiwithSandy"

// console.log(myName);
// console.log(anotherName);


    //  2. Heap(Non primitive)

let userOne = {
    email: "user@user.com",
    password: "user@123"

}

let userTwo = userOne;

// console.log(userOne);
// console.log(userTwo);
// console.table([userOne, userTwo])

userTwo.email = "sandy@gmail.com";

console.log(userTwo.email);
console.log(userTwo.email);