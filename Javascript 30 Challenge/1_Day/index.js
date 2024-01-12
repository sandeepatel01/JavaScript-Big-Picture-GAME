console.log("new one")

const accountId = 123456;
let accountEmail = "sandy@gmail.com";
var accountPassword = "12345";
accountCity = "Bareilly";
let accountState;

// accountId = 01;  // Not allowed

console.log(accountId);

accountEmail = "sp@sp.com";
accountPassword = '01010101';
accountCity = "Bangaluru";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);