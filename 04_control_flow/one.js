// console.log("control flow Or logic flow in javasrcipt.");

// if 
if(false){  // code not execute

}

if(true){ // code execute

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

        //   same work 
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

// if (userLoggedIn && debitCard && 2==="2") {
//     console.log("Allow to buy products");
// }else{
//     console.log("Not allow to buy products");
// }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
