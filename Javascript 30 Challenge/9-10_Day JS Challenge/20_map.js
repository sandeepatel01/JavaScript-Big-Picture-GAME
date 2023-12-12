const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => num + 10)
console.log(newNums);

const newNums1 = myNumers.map( (num) => {  num + 10})    // print undefiend
console.log(newNums1);

const newNums2 = myNumers.map( (num) => { return num + 10})
console.log(newNums2);



const newNums3 = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)

console.log(newNums3);


const newNumsOne = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNumsOne);