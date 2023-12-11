const accountId = 123456;
let accountEmail = "sandy@gmail.com";
var accountPassword = "12345";
accountCity = "Bareilly";   // bad Practice
let accountState;

// accountId = 01;  // Not allowed

console.log(accountId);

accountEmail = "sp@sp.com";
accountPassword = '01010101';
accountCity = "Bangaluru";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);