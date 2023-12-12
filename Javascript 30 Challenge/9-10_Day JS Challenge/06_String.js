

const name = "sandeep"
const repoCount = 50

// console.log(name + repoCount + " Value");   // Bad Practice

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandeep-pt')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);


const newStringOne = "   sandeep    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sandeep.com/sandeep%20patel"

console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));





