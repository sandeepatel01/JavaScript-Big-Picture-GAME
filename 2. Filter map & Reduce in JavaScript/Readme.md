## 1. filter() Method

- the **`filter()`** method is used to create a new array with all elements that pass the test implemented by the provided function. It does not change the original array.
- The syntax is as follows:

```jsx
let newArray = array.filter(callback(element[, index[, array]])[, thisArg])
```

- **`callback`**: Function to test each element of the array. It takes three arguments:
    - **`element`**: The current element being processed in the array.
    - **`index`** (optional): The index of the current element being processed in the array.
    - **`array`** (optional): The array **`filter()`** was called upon.
- **`thisArg`** (optional): Value to use as **`this`** when executing **`callback`**.

Here's an example of how you can use **`filter()`**:

```jsx
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )   // filter bhi callback function he
console.log(newNums);   //  output 1
```

using forEach

```jsx
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []
myNums.forEach( (num) => {    // define scope so add return keyword
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);   // same output as output 1
```

```jsx
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')
//   userBooks = books.filter( (bk) => bk.genre === 'Fiction')
//   userBooks = books.filter( (bk) => bk.genre === 'Science')
//   userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
```

## 2. map() Method

- the **`map()`** method is used to iterate over an array and transform each element of the array using a callback function. It creates a new array with the results of calling the provided function on every element in the calling array. The original array remains unchanged.
- Here's the basic syntax:

```jsx
const newArray = array.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);
```

- **`callback`**: Function that produces an element of the new array, taking three arguments:
    - **`currentValue`**: The current element being processed in the array.
    - **`index`** (optional): The index of the current element being processed in the array.
    - **`array`** (optional): The array **`map`** was called upon.
- **`thisArg`** (optional): Value to use as **`this`** when executing **`callback`**.

### Example:

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

- You can also use arrow functions for concise syntax:

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

```jsx
const newNumsOne = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNumsOne);
```

1. **`.map((num) => num * 10)`**: This first **`map()`** call multiplies each element in the **`myNumbers`** array by 10, creating a new array with the transformed elements.
2. **`.map((num) => num + 1)`**: This second **`map()`** call adds 1 to each element of the array returned by the previous **`map()`** call. It creates another new array with the updated elements.
3. **`.filter((num) => num >= 40)`**: This **`filter()`** call filters out elements from the array returned by the second **`map()`** call, keeping only those elements that are greater than or equal to 40.
4. **`console.log(newNumsOne)`**: Finally, this statement logs the resulting array after all the transformations and filtering have been applied.



## 3. reduce() Method

- the **`reduce()`** method is used to apply a function to each element in an array and reduce the array to a single value.
- The syntax for the **`reduce()`**

```jsx
array.reduce(callbackFunction, initialValue)
```

Here, **`callbackFunction`** is a function that is called for each element in the array, and **`initialValue`** is an optional parameter that specifies the initial value of the accumulator. The callback function takes four arguments: **`accumulator`**, **`currentValue`**, **`currentIndex`**, and **`array`**. The **`accumulator`** is the value returned by the previous invocation of the callback function, or the initial value if supplied.

### Here's a simple example to illustrate the usage of the **`reduce()`** method:

```jsx
const numbers = [1, 2, 3]

//   reduce use for add numbers 

const myTotal = myNums.reduce(function (acc, currval) {      // acc -> accumilator
    console.log(`acc: ${acc} and currval: ${currval}`);      // currval -> current value
    return acc + currval
}, 0)  // 0 = acc

console.log("total:", myTotal);
```

In this example, the **`reduce()`** method is used to calculate the sum of all the elements in the **`numbers`** array. The **`callbackFunction`** takes two arguments: **`accumulator`** and **`currentValue`**, and returns the sum of these two values. The initial value of the accumulator is **`0`**.

```jsx
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
```