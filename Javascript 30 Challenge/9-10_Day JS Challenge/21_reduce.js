const myNums = [1, 2, 3]

//   reduce use for add numbers 


const myTotal = myNums.reduce(function (acc, currval) {      // acc -> accumilator
    console.log(`acc: ${acc} and currval: ${currval}`);      // currval -> current value
    return acc + currval
}, 0)  // 0 = acc

const myTotal1 = myNums.reduce((acc, curr) => acc + curr, 0)

console.log("total:", myTotal1);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);