  // *************** numbers methods ****************** 
// [[Prototype]]: Number
   // 1. constructor: ƒ Number()
   // 2. toExponential: ƒ toExponential()
   //3. toFixed: ƒ toFixed()
  // 4. toLocaleString: ƒ toLocaleString()
  // 5. toPrecision: ƒ toPrecision()
 // 6. toString: ƒ toString()
 // 7. valueOf: ƒ valueOf()  


const score = 600;
// console.log(score);

const balance = new Number(1000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

const bankBalance = 125.865;
// console.log(bankBalance.toPrecision(4));

const newBalance = 1000000;
// console.log(newBalance.toLocaleString());
// console.log(newBalance.toLocaleString('en-IN'));



const num1 = Number.MAX_SAFE_INTEGER
const num2 = Number.MIN_VALUE
const num3 = Number.isInteger
const num4 = Number.MAX_VALUE
const num5 = Number.NEGATIVE_INFINITY
const num6 = Number.POSITIVE_INFINITY

// console.table([num1, num2, num3, num4, num5, num6])



// ******************** Maths ****************************************** 
          
// 1. abs : ƒ abs()
// 2. acos: ƒ acos()
// 3. acosh: ƒ acosh()
// 4. asin: ƒ asin()
// 5. asinh: ƒ asinh()
// 6. atan: ƒ atan()
// 7. atan2: ƒ atan2()
// 8. atanh: ƒ atanh()
// 9. cbrt: ƒ cbrt()
// 10. ceil: ƒ ceil()
// 11. clz32: ƒ clz32()
// 12. cos: ƒ cos()
// 13. cosh: ƒ cosh()
// 14. exp: ƒ exp()
// 15. expm1: ƒ expm1()
// 16. floor: ƒ floor()
// 17. fround: ƒ fround()
// 18. hypot: ƒ hypot()
// 19. imul: ƒ imul()
// 20. log: ƒ log()
// 21. log1p: ƒ log1p()
// 22. log2: ƒ log2()
// 23. log10: ƒ log10()
// 24. max: ƒ max()
// 25. min: ƒ min()
// 26. pow: ƒ pow()
// 27. random: ƒ random()
// 28. round: ƒ round()
// 29. sign: ƒ sign()
// 30. sin: ƒ sin()
// 31. sinh: ƒ sinh()
// 32. sqrt: ƒ sqrt()
// 33. tan: ƒ tan()
// 34. tanh: ƒ tanh()
// 35. trunc: ƒ trunc()




// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)