// console.log("control flow Or logic flow in javasrcipt.");

// if 
if (false) {  // code not execute

}

if (true) { // code execute

}

// [=] - operator assignment (const isLoggedin = true)
// [==] - check equal or not (2 == 2)
// [===] - check variableName typeof(interger[let, const], string )  

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 41 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// //   same work 
// if ( temperature < 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);  // power scope Problems



// -> shortHand notation (but unreadable code)

const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 === "2") {
    console.log("Allow to buy products");
} else {
    console.log("Not allow to buy products");
}


if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}





// switch case 

// switch (key) {        // syntax
//     case value:

//         break;

//     default:
//         break;
// } 

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


// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }





// truthy && falsy values 

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = null ?? undefined ?? 10 ?? 20
// val1 =  undefined ?? null ?? 10 ?? 20
// val1 =  undefined ?? null 
val1 = null ?? undefined


// console.log(val1);