const user = {
    username: "sandeep",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sandy"
// user.welcomeMessage()

// console.log(this);



function chai1() {
    console.log(this);
}
// chai1()


function chai2() {
    let username = "sandeep"
    console.log(this.username);
}
// chai2()


const chai3 = function () {
    let username = "hitesh"
    console.log(this.username);
}
// chai3()

const chai4 = () => {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
// chai4()



const addTwo = (num1, num2) => {     // explicite return
    return num1 + num2
}
// console.log(addTwo(2, 3));


const addTwo1 = (num1, num2) => num1 + num2  // implicite return
// console.log(addTwo1(1, 1));


const addTwo2 = (num1, num2) => (num1 + num2)
// console.log(addTwo2(9, 9));

const addTwo3 = (num1, num2) => ({ username: "sandeep" })
console.log(addTwo3(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => {})