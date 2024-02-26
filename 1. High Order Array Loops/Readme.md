## 1. For of loop

- the **`for...of`** loop is a feature introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015.
- It provides a concise and easy way to iterate over iterable objects such as arrays, strings, maps, sets, etc.
- Here's the basic syntax of the **`for...of`** loop:

```jsx
for (variable of iterable) {
  // code block to be executed
}

```

- **`variable`**: This is a variable that will represent each individual element or value in the iterable object during each iteration of the loop. You declare this variable before the **`of`** keyword.
- **`of`**: This is a keyword that separates the **`variable`** from the **`iterable`**. It's used to indicate that you want to iterate over the elements of the iterable.
- **`iterable`**: This is the object over which you want to iterate. It can be an array, a string, a map, a set, or any other object that implements the iterable protocol.

- using a **`for...of`** loop to iterate over the elements of an array:

```jsx
const numbers = [1, 2, 3, 4, 5]   // array ke liye forOf loop

for (const num of arr) {
    //console.log(num);
}
```

In this example, during each iteration of the loop, the variable **`num`** will take on the value of each element in the **`numbers`** array, one at a time. The loop will log each number to the console.

One important thing to note about the **`for...of`** loop is that it iterates over the *values* of the iterable object, not its indices. This means you don't have direct access to the indices inside the loop. If you need access to indices, you would typically use a traditional **`for`** loop or the **`forEach()`** method for arrays.

- iterating over the characters of a string:

```jsx
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
```

This loop will log each character of the string **`'Hello word!'`** to the console, one character at a time.

### Map

In JavaScript, the **`for...of`** loop is commonly used to iterate over arrays. However, it can also be used to iterate over other iterable objects, such as maps. Here's how you can use the **`for...of`** loop with a Map in JavaScript:

```
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
```

- We first create a Map named **`map`**.
- We then add some key-value pairs to the map using the **`set()`** method.
- Finally, we use a **`for...of`** loop to iterate over the Map. Inside the loop, we destructure each entry of the Map into **`key`** and **`value`** variables, which represent the key and value of each entry, respectively. We then log these key-value pairs to the console.

This demonstrates how the **`for...of`** loop can be used with a Map to iterate over its entries and access both the keys and values conveniently.


### In Object

```jsx
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {     // myObject is not iterable
    console.log(key, ':-', value);
    
}
```

The code you provided attempts to use a **`for...of`** loop to iterate over the key-value pairs of an object (**`myObject`**). However, the error message "myObject is not iterable" indicates that you can't directly iterate over an object using a **`for...of`** loop because objects in JavaScript are not inherently iterable.

In JavaScript, the **`for...of`** loop is primarily used to iterate over iterable objects, such as arrays, strings, maps, sets, etc. Objects, on the other hand, do not implement the iterable protocol by default.

If you want to iterate over the properties of an object, you typically use a **`for...in`** loop or **`Object.entries()`** method instead.



### the **`for...of`** loop provides a convenient way to iterate over the values of iterable objects in JavaScript, making code more readable and concise when you don't need to work with indices.

