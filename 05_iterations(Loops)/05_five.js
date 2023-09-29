const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){     //is callback function -> callback function ka name nahi hota
    // console.log(val);
} )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)  // printme function pass as a referance


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

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageName);
    console.log(item.languageFileName);
} )