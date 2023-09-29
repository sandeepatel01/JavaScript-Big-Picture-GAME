// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log("Valeu:", values);


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )     // forEach no return value

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )   // filter bhi callback function he
// console.log(newNums);   //  output 1

const newNums = myNums.filter( (num) => {     // filter bhi callback function he
    return num > 4
} )
console.log(newNums);   // same output as output 1


// const newNums = []
// myNums.forEach( (num) => {    // define scope so add return keyword
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);   // same output as output 1