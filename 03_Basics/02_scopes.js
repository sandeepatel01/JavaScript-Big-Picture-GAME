//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

    // nested scope 
function one(){
    const username = "sandeep"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()


if (true) {
    const username = "sandeep"
    if (username === "sandeep") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
function addone(num){    // only fxn declaretion
    return num + 1
}
console.log(addone(5))



// console.log(addTwo(9));   // show error
const addTwo = function(num){  //fxn declaration + variable hold
    return num + 2
}
addTwo(5)
console.log(addTwo(9));