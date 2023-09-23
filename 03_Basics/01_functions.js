function myName(){
    console.log("sandeep");
    console.log("patel");
}
// myName();


function addTwoNumber(num1, num2){
    console.log(num1 + num2);
}
// addTwoNumber(2, 2);

// const sum = addTwoNumber(5, 5)
// console.log("Sum: ", sum);

// addTwoNumber(2, "2")
// addTwoNumber("2", 2)
// addTwoNumber(null, 2)
// addTwoNumber(2, null)
// addTwoNumber("2", null)
// addTwoNumber(null, "2")


function addTwoNumber(num1, num2){
    // let sum = num1 + num2;
    // return sum;
    // console.log("sandy");

    return num1 + num2;
}

const result = addTwoNumber(5, 5)
// console.log("result: ", result);

function userLogginMsg(username){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userLogginMsg("sandy"));
// console.log(userLogginMsg(""));
// console.log(userLogginMsg());


function userLogginMsg(username = "sandeep"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLogginMsg());



function calculateCartprice1(num){
    return num
}
// console.log(calculateCartprice1(299, 399, 699, 999));


// //    using (...)-> rest operator 
function calculateCartprice(...num){
    return num
}
// console.log(calculateCartprice(299, 399, 699, 999));



function calculateCartprice(value1, value2, ...num){
    return num
}
// console.log(calculateCartprice(299, 399, 699, 999));


    // Objects Pass in functions 
const user = {
    username: "sandy",
    prices: 299
}
   
function objectHandler(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
objectHandler(user)

objectHandler({
    username: "sandeep",
    price: 699
})



//    Array pass in function 
let array = [299, 599, 799, 899, 999]

function returnArrayValue(getarr){
    return getarr[0]
}
// console.log(returnArrayValue(array));
console.log(returnArrayValue([5,2,4,9]));