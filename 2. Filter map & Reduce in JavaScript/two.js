const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 10)
// const newNums = myNumers.map( (num) => {  num + 10})    // print undefiend
// const newNums = myNumers.map( (num) => { return num + 10})



const newNums = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)

// console.log(newNums);


const newNumsOne = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNumsOne);