// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);

}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );   // table print
    }

}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    // for (let index = 0; index <= myArray.length; index++) {   //undefiend
    const element = myArray[index];
    // console.log(element);

}




// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);

}


// While Loop 

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}


let myArray1 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray1.length) {
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}


// let score = 10;
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);



// Array Specifice loops 

// for of -> direct value atti he

// ["", "", ""] -> array with string
// [{}, {}, {}]  -> array with object

const arr1 = [1, 2, 3, 4, 5]   // array ke liye forOf loop

for (const num of arr1) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}



// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// for of loop not work for object 

for (const [key, value] of myObject) {     // myObject is not iterable
    console.log(key, ':-', value);

}


// For IN LOOP 

// forIn loop me key atti he 


//    forIn loop in Object 
const myObject1 = {      // object ke liye forIn loop
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// forIn loop in Array 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}


const map1 = new Map()   // not iterateble
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

for (const key in map1) {
    console.log(key);
}


// for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {     //is callback function -> callback function ka name nahi hota
    // console.log(val);
})

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)  // printme function pass as a referance


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item);
    console.log(item.languageName);
    console.log(item.languageFileName);
})




const coding1 = ["js", "ruby", "java", "python", "cpp"]

const values = coding1.forEach((item) => {
    console.log(item);
})
console.log("Valeu:", values);


const values1 = coding1.forEach((item) => {
    console.log(item);
    return item
})     // forEach no return value

console.log(values1);
