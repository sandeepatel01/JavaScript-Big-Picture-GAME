//    forIn loop in Object 
const myObject = {      // object ke liye forIn loop
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// forIn loop in Array 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    // console.log(programming[key]);
}


// const map = new Map()   // not iterateble
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }