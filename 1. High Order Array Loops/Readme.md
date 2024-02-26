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



## 2. for in loop

- In JavaScript, the **`for...in`** loop is used to iterate over the enumerable properties of an object.
- Here's the basic syntax:

```jsx
for (variable in object) {
  // code to be executed
}

```

- **`variable`**: A variable that will be assigned to each property in the object on each iteration.
- **`object`**: The object whose enumerable properties are iterated.

- using a **`for...in`** loop to iterate over the elements of an object:

```jsx
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
```

This code demonstrates the usage of a **`for...in`** loop in JavaScript to iterate over the properties of an object **`myObject`**. Let's break down the code:

1. First, an object named **`myObject`** is defined, which contains key-value pairs where keys represent programming language abbreviations and values represent their corresponding full names.
2. The **`for...in`** loop is used to iterate over the properties of the **`myObject`** object.
3. Inside the loop:
    - The **`const key`** variable is declared to represent each property/key of the **`myObject`** object in each iteration.
    - Various actions are commented out:
        - **`console.log(key);`**: This logs the current key (e.g., 'js', 'cpp', etc.) to the console.
        - **`console.log(myObject[key]);`**: This logs the value corresponding to the current key to the console (e.g., 'javascript', 'C++', etc.).
        - **`console.log(`**${key} shortcut is for ${myObject[key]}**`);`**: This logs a formatted string indicating the key and its corresponding value to the console (e.g., 'js shortcut is for javascript', 'cpp shortcut is for C++', etc.).
        
        ### In Array
        
        ```jsx
             // forIn loop in Array 
        const programming = ["js", "rb", "py", "java", "cpp"]
        
        for (const key in programming) {
            console.log(key);
            // console.log(programming[key]);
        }
        ```
        
        This code attempts to use a **`for...in`** loop to iterate over the elements of an array named **`programming`**. However, using **`for...in`** loop with arrays in JavaScript is generally not recommended because it iterates over all enumerable properties of an object, including array indices, as well as properties inherited from the prototype chain. This can lead to unexpected behavior.
        
        Let's break down the code:
        
        1. An array named **`programming`** is defined, containing several programming language abbreviations.
        2. The **`for...in`** loop is used to iterate over the indices (or keys) of the array.
        
        Inside the loop:
        
        - The **`const key`** variable is declared to represent each index of the array in each iteration.
        - **`console.log(key);`** prints the current index to the console.
        
        However, using **`for...in`** loop with arrays in JavaScript may not produce the expected behavior, as it iterates over all enumerable properties, not just array elements. In this case, it will iterate over the indices of the array, but it's not guaranteed to iterate in numerical order, and it may also include properties inherited from the array's prototype.
        
        To iterate over the elements of an array in JavaScript, it's recommended to use a regular **`for`** loop, **`forEach()`** method, or other array iteration methods like **`map()`**, **`filter()`**, etc. Here's how you could iterate over the elements of the **`programming`** array using a regular **`for`** loop:
        
        ```jsx
        for (let i = 0; i < programming.length; i++) {
            console.log(programming[i]);
        }
        
        ```
        
        ### In map
        
        ```jsx
        const map = new Map()   // not iterateble
        map.set('IN', "India")
        map.set('USA', "United States of America")
        map.set('Fr', "France")
        map.set('IN', "India")
        
        for (const key in map) {
            console.log(key);
        }
        ```
        
        This code attempts to iterate over the properties of a Map object using a **`for...in`** loop. Let's break down the code:
        
        1. A Map object named **`map`** is created using the **`new Map()`** constructor. Map objects in JavaScript are collections of key-value pairs where both the keys and the values can be of any type.
        2. Several key-value pairs are added to the Map using the **`set()`** method. It's worth noting that when setting a key that already exists in the Map, the previous value associated with that key will be replaced by the new one. In this case, the key **`'IN'`** is set twice with the value **`'India'`**, but only the last one will be stored.
        3. The **`for...in`** loop is used to iterate over the properties of the **`map`** object.
        
        Inside the loop:
        
        - The **`const key`** variable is declared to represent each property/key of the **`map`** object in each iteration.
        - **`console.log(key);`** prints the current property/key to the console.
        
        However, using **`for...in`** loop with Map objects in JavaScript is not recommended. The reason is that Map objects are not regular JavaScript objects, and their properties are not enumerable. The **`for...in`** loop in JavaScript is designed to iterate over the enumerable properties of an object, but Map objects do not have enumerable properties in the same sense as regular objects.
        
        If you want to iterate over the key-value pairs of a Map object, you can use methods provided by the Map object itself, such as **`forEach()`**:
        
        ```jsx
        map.forEach((value, key) => {
            console.log(key + ': ' + value);
        });
        
        ```
        
        ### Here's an example of how you can use it:
        
        ```jsx
        const person = {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        };
        
        for (let key in person) {
          console.log(key + ': ' + person[key]);
        }
        
        ```
        
        This will output:
        
        ```jsx
        firstName: John
        lastName: Doe
        age: 30
        
        ```
        
        However, it's important to note that **`for...in`** loop iterates over all enumerable properties, including those inherited from the object's prototype chain. If you only want to iterate over an object's own properties, you should use **`hasOwnProperty()`** method to check if the property belongs to the object itself:
        
        ```jsx
        for (let key in person) {
          if (person.hasOwnProperty(key)) {
            console.log(key + ': ' + person[key]);
          }
        }
        
        ```
        
        This will only output the object's own properties:
        
        ```jsx
        firstName: John
        lastName: Doe
        age: 30
        
        ```