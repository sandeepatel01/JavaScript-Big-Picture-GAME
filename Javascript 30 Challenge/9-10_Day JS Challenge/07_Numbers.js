
const score = 600;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(5));

const bankBalance = 125.865;
console.log(bankBalance.toPrecision(4));

const newBalance = 1000000;
console.log(newBalance.toLocaleString());
console.log(newBalance.toLocaleString('en-IN'));



const num1 = Number.MAX_SAFE_INTEGER
const num2 = Number.MIN_VALUE
const num3 = Number.isInteger
const num4 = Number.MAX_VALUE
const num5 = Number.NEGATIVE_INFINITY
const num6 = Number.POSITIVE_INFINITY

console.table([num1, num2, num3, num4, num5, num6])